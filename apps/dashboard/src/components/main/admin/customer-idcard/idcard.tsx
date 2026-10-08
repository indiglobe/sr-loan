import { cn } from "@repo/styles/cn";
import { Button } from "@repo/ui/button";
import { useLoaderData } from "@tanstack/react-router";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { IdCard } from "@/ui/id-card";

export function IdCardPage() {
  return (
    <section className={cn("py-8")}>
      <CustomerIdCardGenerator />
    </section>
  );
}

/**
 * Properties that html2canvas understands particularly well.
 *
 * We copy the browser-computed values onto the cloned elements,
 * so html2canvas does not need to parse Tailwind's original CSS.
 */
const COMPUTED_STYLE_PROPERTIES = [
  "align-content",
  "align-items",
  "align-self",

  "background-color",
  "background-image",
  "background-position",
  "background-repeat",
  "background-size",
  "background-clip",
  "background-origin",

  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",

  "border-left-color",
  "border-left-style",
  "border-left-width",

  "border-right-color",
  "border-right-style",
  "border-right-width",

  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",

  "box-shadow",
  "box-sizing",

  "color",

  "display",

  "fill",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",

  "font-family",
  "font-size",
  "font-style",
  "font-weight",
  "letter-spacing",
  "line-height",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-transform",
  "text-rendering",
  "text-shadow",
  "text-overflow",
  "text-indent",
  "text-wrap",

  "gap",
  "column-gap",
  "row-gap",

  "height",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "width",

  "justify-content",
  "justify-items",
  "justify-self",

  "left",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",

  "object-fit",
  "object-position",
  "opacity",
  "overflow",
  "overflow-x",
  "overflow-y",

  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",

  "position",

  "right",

  "stroke",
  "stroke-width",

  "top",
  "transform",
  "transform-origin",
  "transition",

  "vertical-align",
  "visibility",

  "white-space",

  "z-index",
];

/**
 * Convert a CSS property into a form that html2canvas can understand.
 *
 * The browser has already parsed the original CSS.
 * getComputedStyle() therefore gives us the browser's resolved
 * representation.
 *
 * We intentionally don't modify the application's stylesheet.
 */
function getSafeComputedValue(value: string): string {
  if (!value) {
    return value;
  }

  /*
   * Modern browsers normally serialize computed colors to rgb()
   * / rgba(), but color-mix() and some gradients can still contain
   * modern color syntax.
   *
   * If a value still contains an unsupported function, don't pass
   * that source CSS into html2canvas.
   */
  if (
    value.includes("oklch(") ||
    value.includes("oklab(") ||
    value.includes("lab(") ||
    value.includes("lch(")
  ) {
    /*
     * A solid color can be resolved by asking the browser to render
     * it as a temporary element.
     */
    const temp = document.createElement("div");

    temp.style.position = "fixed";
    temp.style.left = "-100000px";
    temp.style.top = "-100000px";
    temp.style.width = "1px";
    temp.style.height = "1px";

    /*
     * Try background first because this function is also used
     * for background-color.
     */
    temp.style.background = value;

    document.body.appendChild(temp);

    const computed = window.getComputedStyle(temp);

    const resolvedBackground = computed.backgroundColor;

    const resolvedColor = computed.color;

    temp.remove();

    if (
      resolvedBackground &&
      !resolvedBackground.includes("oklch(") &&
      !resolvedBackground.includes("oklab(") &&
      !resolvedBackground.includes("lab(") &&
      !resolvedBackground.includes("lch(")
    ) {
      return resolvedBackground;
    }

    if (
      resolvedColor &&
      !resolvedColor.includes("oklch(") &&
      !resolvedColor.includes("oklab(") &&
      !resolvedColor.includes("lab(") &&
      !resolvedColor.includes("lch(")
    ) {
      return resolvedColor;
    }

    /*
     * If this is a gradient containing modern colors,
     * backgroundColor cannot represent it.
     *
     * We return the original value here only as a last resort.
     * The main solution below handles gradients by reading the
     * actual rendered background from the browser clone.
     */
    return value;
  }

  return value;
}

/**
 * Copy the browser's computed appearance from the real element
 * to the html2canvas clone.
 *
 * This is the critical part.
 *
 * Instead of asking html2canvas to understand:
 *
 *     bg-linear-to-br
 *     color-mix(...)
 *     oklch(...)
 *     Tailwind v4 generated CSS
 *
 * we give the clone the final styles that Chrome has already
 * calculated.
 */
function copyComputedStyles(original: Element, clone: Element): void {
  if (!(original instanceof HTMLElement || original instanceof SVGElement)) {
    return;
  }

  if (!(clone instanceof HTMLElement || clone instanceof SVGElement)) {
    return;
  }

  const computed = window.getComputedStyle(original);

  const cloneStyle = clone instanceof HTMLElement ? clone.style : clone.style;

  for (const property of COMPUTED_STYLE_PROPERTIES) {
    const value = computed.getPropertyValue(property);

    if (!value) {
      continue;
    }

    /*
     * For normal computed styles, Chrome has already converted
     * the CSS variables and most color values for us.
     */
    let safeValue = value;

    /*
     * Don't inject unresolved custom color functions.
     *
     * html2canvas is the component that has trouble parsing these.
     */
    if (
      safeValue.includes("oklch(") ||
      safeValue.includes("oklab(") ||
      safeValue.includes("lab(") ||
      safeValue.includes("lch(")
    ) {
      /*
       * For solid color properties, ask the browser to resolve
       * the value.
       */
      if (property === "color" || property.includes("color")) {
        const temporary = document.createElement("div");

        temporary.style.position = "fixed";

        temporary.style.left = "-100000px";

        temporary.style.top = "-100000px";

        document.body.appendChild(temporary);

        if (property === "color") {
          temporary.style.color = value;
        } else if (property === "background-color") {
          temporary.style.backgroundColor = value;
        } else {
          temporary.style.color = value;
        }

        const resolved = window.getComputedStyle(temporary).color;

        temporary.remove();

        if (
          resolved &&
          !resolved.includes("oklch(") &&
          !resolved.includes("oklab(") &&
          !resolved.includes("lab(") &&
          !resolved.includes("lch(")
        ) {
          safeValue = resolved;
        }
      }
    }

    /*
     * Don't set an unsupported value.
     *
     * The actual visual value will still be available through
     * the browser-rendered clone for most properties.
     */
    if (
      safeValue.includes("oklch(") ||
      safeValue.includes("oklab(") ||
      safeValue.includes("lab(") ||
      safeValue.includes("lch(")
    ) {
      continue;
    }

    cloneStyle.setProperty(property, safeValue);
  }

  /*
   * SVG attributes.
   */
  if (original instanceof SVGElement && clone instanceof SVGElement) {
    const fill = computed.getPropertyValue("fill");

    const stroke = computed.getPropertyValue("stroke");

    const strokeWidth = computed.getPropertyValue("stroke-width");

    if (fill && !fill.includes("oklch(") && !fill.includes("oklab(")) {
      clone.setAttribute("fill", fill);
    }

    if (stroke && !stroke.includes("oklch(") && !stroke.includes("oklab(")) {
      clone.setAttribute("stroke", stroke);
    }

    if (strokeWidth) {
      clone.setAttribute("stroke-width", strokeWidth);
    }
  }

  /*
   * Recurse through children.
   */
  const originalChildren = Array.from(original.children);

  const cloneChildren = Array.from(clone.children);

  for (let index = 0; index < originalChildren.length; index++) {
    const originalChild = originalChildren[index];

    const cloneChild = cloneChildren[index];

    if (originalChild && cloneChild) {
      copyComputedStyles(originalChild, cloneChild);
    }
  }
}

/**
 * Copy important pseudo-element styles.
 *
 * Your current IdCard doesn't rely on pseudo elements for its
 * actual orange/amber shapes, but this makes the capture robust
 * for components elsewhere in the card.
 */
function copyPseudoElementStyles(original: Element, clone: Element): void {
  if (!(original instanceof HTMLElement)) {
    return;
  }

  if (!(clone instanceof HTMLElement)) {
    return;
  }

  for (const pseudo of ["::before", "::after"]) {
    const computed = window.getComputedStyle(original, pseudo);

    if (!computed || computed.content === "none") {
      continue;
    }

    const style = document.createElement("style");

    /*
     * We deliberately avoid copying the complete stylesheet.
     * Only the resolved pseudo-element appearance is copied.
     */
    const properties = [
      "content",
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "width",
      "height",
      "background-color",
      "background-image",
      "border",
      "border-radius",
      "box-shadow",
      "opacity",
      "transform",
      "transform-origin",
      "z-index",
    ];

    let css = "";

    for (const property of properties) {
      const value = computed.getPropertyValue(property);

      if (!value) {
        continue;
      }

      if (
        value.includes("oklch(") ||
        value.includes("oklab(") ||
        value.includes("lab(") ||
        value.includes("lch(")
      ) {
        continue;
      }

      css += `${property}:${value};`;
    }

    style.textContent = `
      [data-html2canvas-pseudo]${pseudo} {
        ${css}
      }
    `;

    clone.setAttribute("data-html2canvas-pseudo", "");

    clone.ownerDocument.head.appendChild(style);
  }
}

/**
 * Hide everything that isn't part of the ID card from the clone.
 *
 * The original page is never modified.
 */
function prepareClone(
  originalRoot: HTMLElement,
  clonedDocument: Document,
): HTMLElement | null {
  /*
   * html2canvas clones the target element itself.
   */
  const clonedRoot = clonedDocument.querySelector(
    "[data-id-card-capture-root]",
  );

  if (!(clonedRoot instanceof HTMLElement)) {
    return null;
  }

  /*
   * Find the corresponding original element.
   *
   * We use the element itself rather than trying to reconstruct
   * the IdCard.
   */
  copyComputedStyles(originalRoot, clonedRoot);

  /*
   * Copy pseudo elements.
   */
  const originalElements = [
    originalRoot,
    ...Array.from(originalRoot.querySelectorAll("*")),
  ];

  const cloneElements = [
    clonedRoot,
    ...Array.from(clonedRoot.querySelectorAll("*")),
  ];

  for (let index = 0; index < originalElements.length; index++) {
    const original = originalElements[index];

    const clone = cloneElements[index];

    if (original && clone) {
      copyPseudoElementStyles(original, clone);
    }
  }

  /*
   * -----------------------------------------------------------
   * Remove every stylesheet from the html2canvas clone.
   *
   * THIS is what prevents html2canvas from ever seeing
   * Tailwind's oklch() stylesheet.
   *
   * The inline computed styles we copied above remain.
   * -----------------------------------------------------------
   */
  const styles = clonedDocument.querySelectorAll(
    "style, link[rel='stylesheet']",
  );

  styles.forEach((style) => {
    style.remove();
  });

  /*
   * Remove animations/transitions.
   */
  const freezeStyle = clonedDocument.createElement("style");

  freezeStyle.textContent = `
    *,
    *::before,
    *::after {
      animation: none !important;
      animation-delay: 0s !important;
      animation-duration: 0s !important;
      transition: none !important;
      transition-duration: 0s !important;
      caret-color: transparent !important;
    }
  `;

  clonedDocument.head.appendChild(freezeStyle);

  /*
   * Ensure the cloned root itself remains visible.
   */
  clonedRoot.style.visibility = "visible";

  clonedRoot.style.opacity = "1";

  return clonedRoot;
}

/**
 * Download a canvas as a JPG.
 */
function downloadCanvasAsJpg(
  canvas: HTMLCanvasElement,
  filename: string,
): void {
  /*
   * Use toBlob rather than toDataURL where possible.
   *
   * This avoids creating a huge base64 string in memory.
   */
  canvas.toBlob(
    (blob) => {
      if (!blob) {
        console.error("Could not create JPG blob.");

        return;
      }

      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");

      anchor.href = url;
      anchor.download = filename;

      document.body.appendChild(anchor);

      anchor.click();

      anchor.remove();

      /*
       * Let the browser finish the download before
       * releasing the object URL.
       */
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    },
    "image/jpeg",
    0.98,
  );
}

function CustomerIdCardGenerator() {
  const { setteledUserDetails } = useLoaderData({
    from: "/(authenticated-routes)/admin/dashboard/$agentId/id-card/",
  });

  const agreementRef = useRef<HTMLDivElement | null>(null);

  const [isDownloading, setIsDownloading] = useState(false);

  if (setteledUserDetails.status === "rejected") {
    return <>Agreement Error</>;
  }

  const { value: userDetails } = setteledUserDetails;

  if (!userDetails) {
    return <>No user details</>;
  }

  const downloadIdCard = async () => {
    const element = agreementRef.current;

    if (!element) {
      console.error("ID card element not found.");

      return;
    }

    if (isDownloading) {
      return;
    }

    setIsDownloading(true);

    try {
      /*
       * -------------------------------------------------------
       * Wait for fonts.
       * -------------------------------------------------------
       */
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      /*
       * -------------------------------------------------------
       * Wait for images.
       * -------------------------------------------------------
       */
      const images = Array.from(element.querySelectorAll("img"));

      await Promise.all(
        images.map(
          (image) =>
            new Promise<void>((resolve) => {
              if (image.complete) {
                resolve();
                return;
              }

              const finish = () => {
                image.removeEventListener("load", finish);

                image.removeEventListener("error", finish);

                resolve();
              };

              image.addEventListener("load", finish, { once: true });

              image.addEventListener("error", finish, { once: true });
            }),
        ),
      );

      /*
       * -------------------------------------------------------
       * Wait for two browser paint cycles.
       * -------------------------------------------------------
       */
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });

      /*
       * -------------------------------------------------------
       * IMPORTANT:
       *
       * Get the dimensions of the REAL rendered UI.
       *
       * We don't use A4 dimensions.
       * We don't resize the card to some arbitrary format.
       * -------------------------------------------------------
       */
      const rect = element.getBoundingClientRect();

      /*
       * -------------------------------------------------------
       * Capture.
       *
       * We continue using YOUR installed html2canvas.
       *
       * We don't modify the real application's CSS.
       *
       * We only sanitize the temporary cloned document created
       * internally by html2canvas.
       * -------------------------------------------------------
       */
      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",

        /*
         * 4x is intentionally used because this is an
         * ID card and the physical dimensions are small.
         *
         * Text becomes significantly sharper in the JPG.
         */
        scale: 4,

        width: Math.ceil(rect.width),

        height: Math.ceil(rect.height),

        x: 0,
        y: 0,

        useCORS: true,

        allowTaint: false,

        imageTimeout: 30000,

        logging: false,

        /*
         * This callback operates ONLY on html2canvas's
         * temporary cloned document.
         *
         * Your actual UI/CSS is never changed.
         */
        onclone: (clonedDocument) => {
          prepareClone(element, clonedDocument);
        },
      });

      /*
       * -------------------------------------------------------
       * Generate filename.
       * -------------------------------------------------------
       */
      const safeName = String(userDetails.name ?? "customer")
        .trim()
        .replace(/[^a-zA-Z0-9-_ ]/g, "")
        .replace(/\s+/g, "-");

      /*
       * -------------------------------------------------------
       * Download as JPG.
       * -------------------------------------------------------
       */
      downloadCanvasAsJpg(canvas, `${safeName || "customer"}-id-card.jpg`);
    } catch (error) {
      /*
       * There is intentionally NO second html2canvas fallback.
       *
       * If the first capture fails, calling the same parser again
       * only produces the same error.
       */
      console.error("Failed to download ID card:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/*
       * ---------------------------------------------------------
       * THIS IS THE ACTUAL UI.
       *
       * No second/recreated card.
       * No screenshot-specific card.
       * No alternative CSS.
       *
       * The exact component the user sees is captured.
       * ---------------------------------------------------------
       */}
      <div ref={agreementRef} data-id-card-capture-root>
        <IdCard
          employeeId={userDetails.employeeId}
          name={userDetails.name}
          emergencyContact={
            userDetails.emergencyPhoneNumber
              ? userDetails.emergencyPhoneNumber
              : undefined
          }
          joiningDate={new Date(userDetails.createdAt)}
        />
      </div>

      <Button
        className={cn("fixed right-10 top-30")}
        onClick={downloadIdCard}
        disabled={isDownloading}
      >
        {isDownloading ? "Preparing..." : "Download ID Card"}
      </Button>
    </>
  );
}
