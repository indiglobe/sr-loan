import { FullAgreementContent } from "@/ui/agreement";
import { cn } from "@repo/styles/cn";
import { Button } from "@repo/ui/button";
import { useLoaderData } from "@tanstack/react-router";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

export function AgreementPage() {
  return (
    <>
      <section className={cn(`py-8`)}>
        <AgreementGenerator />
      </section>
    </>
  );
}

function AgreementGenerator() {
  const { setteledUserDetails } = useLoaderData({
    from: "/(authenticated-routes)/agent/agreement/",
  });

  const agreementRef = useRef<null | HTMLDivElement>(null);

  if (setteledUserDetails.status === "rejected") {
    return <>Agreement Error</>;
  }

  const { value: userDetails } = setteledUserDetails;

  if (!userDetails) {
    return <>No user details</>;
  }

  const downloadAgreement = async () => {
    const element = agreementRef.current;

    if (!element) return;

    const canvas = await html2canvas(element, {
      backgroundColor: "#fff",
      scale: 2,

      onclone: (doc) => {
        const style = doc.createElement("style");

        style.textContent = `
        *,
        *::before,
        *::after {
          color: #000 !important;
          background-color: #fff !important;
          border-color: #000 !important;
        }
      `;

        doc.head.appendChild(style);
      },
    });

    const pdf = new jspdf({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const margin = 15;

    const pageWidth = 210;
    const pageHeight = 297;

    const contentWidth = pageWidth - margin * 2;
    const contentHeight = pageHeight - margin * 2;

    const elementRect = element.getBoundingClientRect();

    // How many canvas pixels correspond to one CSS pixel
    const scaleX = canvas.width / elementRect.width;
    const scaleY = canvas.height / elementRect.height;

    /*
     * Get the bottom of every rendered text line.
     */
    const lineBottoms: number[] = [];

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

    let node: Node | null;

    while ((node = walker.nextNode())) {
      if (!node.textContent?.trim()) continue;

      const range = document.createRange();
      range.selectNodeContents(node);

      for (const rect of Array.from(range.getClientRects())) {
        const bottom = rect.bottom - elementRect.top;

        if (bottom > 0) {
          lineBottoms.push(bottom);
        }
      }
    }

    // Remove duplicates and sort.
    const boundaries = [
      ...new Set(lineBottoms.map((value) => Math.round(value))),
    ].sort((a, b) => a - b);

    /*
     * Convert the PDF's printable height into canvas pixels.
     */
    const pageHeightPx = (contentHeight / contentWidth) * canvas.width;

    let startY = 0;

    while (startY < canvas.height) {
      const targetY = startY + pageHeightPx;

      /*
       * Find the last complete text line before the page boundary.
       */
      const boundary = boundaries
        .map((y) => y * scaleY)
        .filter((y) => y > startY && y <= targetY)
        .pop();

      let endY = boundary ?? Math.min(targetY, canvas.height);

      /*
       * If there is no line boundary, fall back to the target.
       */
      if (endY <= startY) {
        endY = Math.min(startY + pageHeightPx, canvas.height);
      }

      const sliceHeight = endY - startY;

      const pageCanvas = document.createElement("canvas");

      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.ceil(sliceHeight);

      const ctx = pageCanvas.getContext("2d");

      if (!ctx) return;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

      ctx.drawImage(
        canvas,
        0,
        startY,
        canvas.width,
        sliceHeight,
        0,
        0,
        canvas.width,
        sliceHeight,
      );

      if (startY > 0) {
        pdf.addPage();
      }

      const image = pageCanvas.toDataURL("image/png");

      const imageHeight = (pageCanvas.height / pageCanvas.width) * contentWidth;

      pdf.addImage(
        image,
        "PNG",
        margin,
        margin,
        contentWidth,
        Math.min(imageHeight, contentHeight),
      );

      startY = endY;
    }

    pdf.save(`${userDetails.name}-agreement.pdf`);
  };

  return (
    <>
      <FullAgreementContent
        location={userDetails.location}
        name={userDetails.name}
        pin={userDetails.pin}
        ref={agreementRef}
      />
      <Button
        className={cn(`fixed right-10 top-30`)}
        onClick={downloadAgreement}
      >
        Download Agreement
      </Button>
    </>
  );
}
