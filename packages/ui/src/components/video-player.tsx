"use client";

import type { ComponentProps } from "react";
import { Fragment } from "react";
import { Video as Video_VJS } from "@videojs/react/video";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/styles/cn";
import {
  videoFeatures,
  createPlayer,
  Hotkey,
  Gesture,
  Poster as Poster_VJS,
  BufferingIndicator as BufferingIndicator_VJS,
  PlayButton as PlayButton_VJS,
  SeekButton as SeekButton_VJS,
  FullscreenButton as FullscreenButton_VJS,
  PiPButton as PiPButton_VJS,
  CastButton as CastButton_VJS,
  CaptionsButton as CaptionsButton_VJS,
  PlaybackRateButton as PlaybackRateButton_VJS,
  MuteButton as MuteButton_VJS,
  Thumbnail as Thumbnail_VJS,

  //
  Controls,
  ErrorDialog,
  Tooltip,
  TimeSlider,
  Slider,
  AlertDialog,
  Time,
  VolumeSlider,
  Popover,

  //
  GestureCoordinator,
  HotkeyCoordinator,

  //
  applyElementProps,
  applyStateDataAttrs,
  audioFeatures,
  backgroundFeatures,
  bufferFeature,
  composeRefs,
  controlsFeature,
  createAlertDialog,
  createButton,
  createDismissLayer,
  createDoubleTapGesture,
  createHotkey,
  createPopover,
  createSelector,
  createSlider,
  createTapGesture,
  createThumbnail,
  createTooltip,
  createTransition,
  createWheelStep,
  definePlayerFeature,
  errorFeature,
  features,
  findGestureCoordinator,
  findHotkeyCoordinator,
  fullscreenFeature,
  getAnchorNameStyle,
  getAnchorPositionStyle,
  getGestureCoordinator,
  getManualPositionStyle,
  getPercentFromPointerEvent,
  getPopupPositionRect,
  getPositioningCSSVars,
  getSliderCSSVars,
  getSliderPreviewStyle,
  getStateDataAttrs,
  getTimeSliderCSSVars,
  isHotkeyToggleAction,
  logMissingFeature,
  matchesHotkeyEvent,
  mergeProps,
  parseHotkeyPattern,
  pipFeature,
  playbackFeature,
  playbackRateFeature,
  renderElement,
  resolveGestureAction,
  resolveHotkeyAction,
  resolveOffsets,
  selectBuffer,
  selectControls,
  selectError,
  selectFullscreen,
  selectPiP,
  selectPlayback,
  selectPlaybackRate,
  selectSource,
  selectTextTrack,
  selectTime,
  selectVolume,
  shallowEqual,
  sourceFeature,
  textTrackFeature,
  timeFeature,
  toAriaKeyShortcut,
  useAlertDialogContext,
  useAriaKeyShortcuts,
  useButton,
  useComposedRefs,
  useContainer,
  useContainerAttach,
  useDestroy,
  useDoubleTapGesture,
  useErrorDialogContext,
  useHotkey,
  useLatestRef,
  useMediaAttach,
  useMediaInstance,
  useOptionalPlayer,
  usePlayerContext,
  usePopoverContext,
  useTooltipContext,
  useSelector,
  useSlider,
  useStore,
  useTapGesture,
  volumeFeature,
} from "@videojs/react";

export const Player = createPlayer({
  features: videoFeatures,
});

const usePlayer: typeof Player.usePlayer = Player.usePlayer;
const useMedia: typeof Player.useMedia = Player.useMedia;

function VideoPlayer({
  className,
  ...props
}: ComponentProps<typeof Player.Container>) {
  return (
    <Player.Provider>
      <Player.Container
        {...props}
        className={cn(
          "group relative isolate h-full w-full overflow-hidden rounded-md bg-black font-sans text-white outline-none",
          className,
        )}
      />
    </Player.Provider>
  );
}

function Video({ className, ...props }: ComponentProps<typeof Video_VJS>) {
  return (
    <Video_VJS
      {...props}
      data-slot={`video`}
      className={cn("aspect-video w-full object-contain", className)}
    />
  );
}

/**
 * Displays the video poster image. Shows before playback starts, hides after.
 *
 * @example
 * ```tsx
 * <Poster src="poster.jpg" alt="Video description" />
 *
 * <Poster
 *   src="poster.jpg"
 *   alt="Video description"
 *   className={(state) => state.visible ? 'visible' : 'hidden'}
 * />
 * ```
 */
function Poster({ className, ...props }: ComponentProps<typeof Poster_VJS>) {
  return (
    <Poster_VJS
      {...props}
      data-slot={`poster`}
      className={cn("absolute inset-0 z-1", className)}
    />
  );
}

/**
 * Displays a semi-transparent overlay when hovered over the video player.
 */
function Overlay({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      data-slot={`overlay`}
      className={cn(
        "pointer-events-none absolute inset-0 z-2 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100",
        className,
      )}
    />
  );
}

/**
 * Displays a buffering indicator when media is waiting for data.
 *
 * Visibility is delayed (default 500ms) to avoid flashing on quick buffers.
 *
 * @example
 * ```tsx
 * <BufferingIndicator />
 *
 * <BufferingIndicator delay={1000} />
 *
 * <BufferingIndicator
 *   render={(props, state) => (
 *     <div {...props}>{state.visible && <Spinner />}</div>
 *   )}
 * />
 * ```
 */
function BufferingIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BufferingIndicator_VJS>) {
  return (
    <BufferingIndicator_VJS
      data-slot={`buffering-indicator`}
      render={(props) => (
        <div
          {...props}
          className={cn(
            `absolute inset-0 z-30 hidden items-center justify-center data-visible:flex`,
            className,
          )}
        >
          {children}
        </div>
      )}
      {...props}
    />
  );
}

function BufferingIcon({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `rounded-full bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-xl`,
        className,
      )}
      {...props}
    />
  );
}

/**
 * Wrapper for gesture buttons
 */
function GestureWrapper({ ...props }: ComponentProps<typeof Fragment>) {
  return <Fragment {...props} />;
}

/**
 * Provides different type of gestures
 */
function GestureAction({ ...props }: ComponentProps<typeof Gesture>) {
  return <Gesture {...props} data-slot={`gesture-action`} />;
}

/**
 * Wrapper for hotkey buttons
 */
function HotkeyWrapper({ ...props }: ComponentProps<typeof Fragment>) {
  return <Fragment {...props} />;
}

/**
 * Provides different type of hotkeys
 */
function HotkeyAction({ ...props }: ComponentProps<typeof Hotkey>) {
  return <Hotkey data-slot={`hotkey-action`} {...props} />;
}

/** Root container for player controls state and rendered control content. */
function ControlsRoot({
  className,
  ...props
}: ComponentProps<typeof Controls.Root>) {
  const paused = usePlayer((s) => s.paused);

  return (
    <Controls.Root
      data-slot={`controls-root`}
      className={cn(
        `absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-center gap-2 rounded-none p-2 transition-all duration-200 md:flex-nowrap`,
        `opacity-0 group-hover:opacity-100`,
        { "opacity-100": paused },
        className,
      )}
      {...props}
    />
  );
}

/** Layout group for related controls; sets `role="group"` when labeled. */
function ControlsGroup({ ...props }: ComponentProps<typeof Controls.Group>) {
  return <Controls.Group data-slot={`controls-group`} {...props} />;
}

function TooltipProvider({
  ...props
}: ComponentProps<typeof Tooltip.Provider>) {
  return <Tooltip.Provider data-slot={`tooltip-provider`} {...props} />;
}

function TooltipRoot({ ...props }: ComponentProps<typeof Tooltip.Root>) {
  return <Tooltip.Root data-slot={`tooltip-root`} {...props} />;
}

/** Element that triggers the tooltip on hover and focus. Renders a `<button>` element.
 *
 * Use `asChild` if you want to provide custom component
 *
 */
function TooltipTrigger({
  asChild,
  children,
  ...props
}: ComponentProps<typeof Tooltip.Trigger> & {
  asChild?: boolean;
}) {
  return (
    <Tooltip.Trigger
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** Container for the tooltip content. Positioned relative to the trigger using CSS anchor positioning with a JavaScript fallback. */
function TooltipPopup({ ...props }: ComponentProps<typeof Tooltip.Popup>) {
  return (
    <Tooltip.Popup
      data-slot={`tooltip-popup`}
      className={cn(
        `bg-foreground text-background rounded-xs px-1 py-0.5 text-xs`,
      )}
      {...props}
    />
  );
}

/** Decorative arrow pointing from the tooltip toward the trigger. Hidden from assistive technology. */
function TooltipArrow({ ...props }: ComponentProps<typeof Tooltip.Arrow>) {
  return (
    <Tooltip.Arrow
      data-slot={`tooltip-arrow`}
      className={cn(
        `bg-foreground text-background rounded-xs px-1 py-0.5 text-xs`,
      )}
      {...props}
    />
  );
}

function ErrorDialogRoot({
  ...props
}: ComponentProps<typeof ErrorDialog.Root>) {
  return <ErrorDialog.Root data-slot={`error-dialog-root`} {...props} />;
}

function ErrorDialogPopup({
  className,
  ...props
}: ComponentProps<typeof ErrorDialog.Popup>) {
  return (
    <ErrorDialog.Popup
      data-slot={`error-dialog-popup`}
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center p-6",
        className,
      )}
      {...props}
    />
  );
}

function ErrorDialogClose({
  ...props
}: ComponentProps<typeof ErrorDialog.Close>) {
  return <ErrorDialog.Close data-slot={`error-dialog-close`} {...props} />;
}

function ErrorDialogDescription({
  ...props
}: ComponentProps<typeof ErrorDialog.Description>) {
  return (
    <ErrorDialog.Description
      data-slot={`error-dialog-description`}
      {...props}
    />
  );
}

function ErrorDialogTitle({
  ...props
}: ComponentProps<typeof ErrorDialog.Title>) {
  return <ErrorDialog.Title data-slot={`error-dialog-title`} {...props} />;
}

function ErrorDialogContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`error-dialog-content`}
      className={cn(
        `w-full max-w-sm rounded-3xl bg-black/70 p-5 ring-1 ring-white/10 backdrop-blur-2xl`,
        className,
      )}
      {...props}
    />
  );
}

/**
 * A button that toggles playback.
 *
 * @example
 * ```tsx
 * <PlayButton />
 *
 * <PlayButton
 *   render={(props, state) => (
 *     <button {...props}>
 *       {state.paused ? <PlayIcon /> : <PauseIcon />}
 *     </button>
 *   )}
 * />
 * ```
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function PlayButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof PlayButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <PlayButton_VJS
      data-slot="play-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/**
 * A button that seeks forward or backward by a configurable number of seconds.
 *
 * @example
 * ```tsx
 * <SeekButton seconds={-10} />
 *
 * <SeekButton
 *   seconds={30}
 *   render={(props, state) => (
 *     <button {...props}>
 *       {state.direction === 'backward' ? <RewindIcon /> : <FastForwardIcon />}
 *     </button>
 *   )}
 * />
 * ```
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function SeekButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof SeekButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <SeekButton_VJS
      data-slot="seek-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that toggles fullscreen.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function FullscreenButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof FullscreenButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <FullscreenButton_VJS
      data-slot="fullscreen-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that toggles picture-in-picture.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function PiPButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof PiPButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <PiPButton_VJS
      data-slot="pip-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that toggles casting to a remote device.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function CastButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof CastButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <CastButton_VJS
      data-slot="cast-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that provides a Thumbnail.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */

function Thumbnail({
  asChild,
  children,
  ...props
}: ComponentProps<typeof Thumbnail_VJS> & {
  asChild?: boolean;
}) {
  return (
    <Thumbnail_VJS
      data-slot="thumbnail"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that toggles captions.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function CaptionsButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof CaptionsButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <CaptionsButton_VJS
      data-slot="captions-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/**
 * A button that cycles through playback rates.
 *
 * @example
 * ```tsx
 * <PlaybackRateButton />
 *
 * <PlaybackRateButton
 *   render={(props, state) => (
 *     <button {...props}>
 *       {state.rate}&times;
 *     </button>
 *   )}
 * />
 * ```
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function PlaybackRateButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof PlaybackRateButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <PlaybackRateButton_VJS
      data-slot="playback-rate-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

/** A button that toggles mute state.
 *
 * Use `asChild` if you want it to use as a wrapper.
 */
function MuteButton({
  asChild,
  children,
  ...props
}: ComponentProps<typeof MuteButton_VJS> & {
  asChild?: boolean;
}) {
  return (
    <MuteButton_VJS
      data-slot="mute-button"
      render={
        asChild
          ? (triggerProps) => <Slot {...triggerProps}>{children}</Slot>
          : undefined
      }
      {...props}
    />
  );
}

function TimeLine({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`time-line`}
      className={cn(
        "order-first flex w-full items-center gap-3 px-2 md:order-0 md:flex-1",
        className,
      )}
      {...props}
    />
  );
}

function TimeLinePreview({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`time-line-preview`}
      className={cn(
        "pointer-events-none absolute bottom-full left-(--media-slider-pointer) z-20 mb-4 hidden -translate-x-1/2 flex-col overflow-hidden rounded-2xl bg-black/90 ring-1 ring-white/10 backdrop-blur-xl group-data-pointing/slider:flex",
        className,
      )}
      {...props}
    />
  );
}

function TimeSliderRoot({
  className,
  ...props
}: ComponentProps<typeof TimeSlider.Root>) {
  const time = usePlayer((s) => s.currentTime);

  return (
    <TimeSlider.Root
      data-slot="time-slider-root"
      value={time}
      className={cn(
        `group/slider relative flex h-8 flex-1 items-center`,
        className,
      )}
      {...props}
    />
  );
}

/** Displays the buffered range on the slider track.
 */
function TimeSliderBuffer({
  className,
  ...props
}: ComponentProps<typeof TimeSlider.Buffer>) {
  return (
    <TimeSlider.Buffer
      data-slot="time-slider-buffer"
      className={cn(
        `absolute inset-y-0 left-0 rounded-full bg-white/30`,
        className,
      )}
      {...props}
    />
  );
}

/** Displays the filled portion from start to the current value. */
function TimeSliderFill({
  className,
  ...props
}: ComponentProps<typeof TimeSlider.Fill>) {
  const duration = usePlayer((s) => s.duration);
  const currentTime = usePlayer((s) => s.currentTime);
  const percentage = (currentTime / duration) * 100;

  return (
    <TimeSlider.Fill
      data-slot="time-slider-fill"
      style={{ width: `${percentage}%`, ...props.style }}
      className={cn(
        `absolute bg-white/90 inset-y-0 left-0 rounded-full `,
        className,
      )}
      {...props}
    />
  );
}

/** Positioning container for preview content that tracks the pointer along the slider.
 */
function TimeSliderPreview({
  ...props
}: ComponentProps<typeof TimeSlider.Preview>) {
  return <TimeSlider.Preview data-slot="time-slider-preview" {...props} />;
}

/** Draggable handle for setting the slider value. Receives focus and handles keyboard interaction. */
function TimeSliderThumb({
  className,
  ...props
}: ComponentProps<typeof TimeSlider.Thumb>) {
  const duration = usePlayer((s) => s.duration);
  const currentTime = usePlayer((s) => s.currentTime);
  const percentage = (currentTime / duration) * 100;

  return (
    <TimeSlider.Thumb
      data-slot="time-slider-thumb"
      style={{ left: `${percentage}%`, ...props.style }}
      className={cn(
        `absolute top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full  opacity-0 shadow-lg transition group-hover/slider:opacity-100 focus-visible:opacity-100`,
        className,
      )}
      {...props}
    />
  );
}

/** Contains the slider's visual track and interactive hit zone. */
function TimeSliderTrack({
  className,
  ...props
}: ComponentProps<typeof TimeSlider.Track>) {
  return (
    <TimeSlider.Track
      data-slot="time-slider-track"
      className={cn(
        `relative h-1.5 w-full overflow-hidden rounded-full `,
        className,
      )}
      {...props}
    />
  );
}

/** Displays a formatted text representation of the slider value. Renders an `<output>` element. */
function TimeSliderValue({
  ...props
}: ComponentProps<typeof TimeSlider.Value>) {
  return (
    <TimeSlider.Value
      data-slot="time-slider-value"
      className={cn(``, props.className)}
      {...props}
    />
  );
}

/**
 * Displays a formatted time value (current, duration, or remaining).
 *
 * @example
 * ```tsx
 * <TimeValue />
 * <TimeValue type="duration" />
 * <TimeValue type="remaining" negativeSign="−" />
 * ```
 */
function TimeValue({ className, ...props }: ComponentProps<typeof Time.Value>) {
  return (
    <Time.Value
      data-slot="time-value"
      className={cn(`text-xs text-white/90 tabular-nums`, className)}
      {...props}
    />
  );
}

/**
 * Container for composed time displays. Renders a `<span>` element.
 *
 * @example
 * ```tsx
 * <TimeGroup>
 *   <TimeValue type="current" />
 *   <TimeSeparator />
 *   <TimeValue type="duration" />
 * </TimeGroup>
 * ```
 */
function TimeGroup({ ...props }: ComponentProps<typeof Time.Group>) {
  return <Time.Group data-slot="time-group" {...props} />;
}

/**
 * Divider between time values. Hidden from screen readers.
 *
 * @example
 * ```tsx
 * <TimeSeparator />
 * <TimeSeparator> of </TimeSeparator>
 * ```
 */
function TimeSeparator({ ...props }: ComponentProps<typeof Time.Separator>) {
  return <Time.Separator data-slot="time-separator" {...props} />;
}

function SliderRoot({ ...props }: ComponentProps<typeof Slider.Root>) {
  return <Slider.Root data-slot="slider-root" {...props} />;
}

/** Displays the buffered range on the slider track. */
function SliderBuffer({ ...props }: ComponentProps<typeof Slider.Buffer>) {
  return <Slider.Buffer data-slot="slider-buffer" {...props} />;
}

/** Displays the filled portion from start to the current value. */
function SliderFill({ ...props }: ComponentProps<typeof Slider.Fill>) {
  return <Slider.Fill data-slot="slider-fill" {...props} />;
}

/** Positioning container for preview content that tracks the pointer along the slider. */
function SliderPreview({ ...props }: ComponentProps<typeof Slider.Preview>) {
  return <Slider.Preview data-slot="slider-preview" {...props} />;
}

/** Draggable handle for setting the slider value. Receives focus and handles keyboard interaction. */
function SliderThumb({ ...props }: ComponentProps<typeof Slider.Thumb>) {
  return <Slider.Thumb data-slot="slider-thumb" {...props} />;
}

function SliderThumbnail({
  ...props
}: ComponentProps<typeof Slider.Thumbnail>) {
  return <Slider.Thumbnail data-slot="slider-thumbnail" {...props} />;
}

/** Contains the slider's visual track and interactive hit zone. */
function SliderTrack({ ...props }: ComponentProps<typeof Slider.Track>) {
  return <Slider.Track data-slot="slider-track" {...props} />;
}

/** Displays a formatted text representation of the slider value. Renders an `<output>` element. */
function SliderValue({ ...props }: ComponentProps<typeof Slider.Value>) {
  return <Slider.Value data-slot="slider-value" {...props} />;
}

function AlertDialogRoot({
  ...props
}: ComponentProps<typeof AlertDialog.Root>) {
  return <AlertDialog.Root data-slot="alert-dialog-root" {...props} />;
}

function AlertDialogClose({
  ...props
}: ComponentProps<typeof AlertDialog.Close>) {
  return <AlertDialog.Close data-slot="alert-dialog-close" {...props} />;
}

function AlertDialogDescription({
  ...props
}: ComponentProps<typeof AlertDialog.Description>) {
  return (
    <AlertDialog.Description data-slot="alert-dialog-description" {...props} />
  );
}

function AlertDialogPopup({
  ...props
}: ComponentProps<typeof AlertDialog.Popup>) {
  return <AlertDialog.Popup data-slot="alert-dialog-popup" {...props} />;
}

function AlertDialogTitle({
  ...props
}: ComponentProps<typeof AlertDialog.Title>) {
  return <AlertDialog.Title data-slot="alert-dialog-title" {...props} />;
}

/** Displays the filled portion from start to the current value. */
function VolumeSliderFill({
  ...props
}: ComponentProps<typeof VolumeSlider.Fill>) {
  return <VolumeSlider.Fill data-slot="volume-slider-fill" {...props} />;
}

function VolumeSliderPreview({
  ...props
}: ComponentProps<typeof VolumeSlider.Preview>) {
  return <VolumeSlider.Preview data-slot="volume-slider-preview" {...props} />;
}

/** Positioning container for preview content that tracks the pointer along the slider. */
function VolumeSliderRoot({
  ...props
}: ComponentProps<typeof VolumeSlider.Root>) {
  return <VolumeSlider.Root data-slot="volume-slider-root" {...props} />;
}

/** Draggable handle for setting the slider value. Receives focus and handles keyboard interaction. */
function VolumeSliderThumb({
  ...props
}: ComponentProps<typeof VolumeSlider.Thumb>) {
  return <VolumeSlider.Thumb data-slot="volume-slider-thumb" {...props} />;
}

/** Contains the slider's visual track and interactive hit zone. */
function VolumeSliderTrack({
  ...props
}: ComponentProps<typeof VolumeSlider.Track>) {
  return <VolumeSlider.Track data-slot="volume-slider-track" {...props} />;
}

/** Displays a formatted text representation of the slider value. Renders an `<output>` element. */
function VolumeSliderValue({
  ...props
}: ComponentProps<typeof VolumeSlider.Value>) {
  return <VolumeSlider.Value data-slot="volume-slider-value" {...props} />;
}

/** Decorative arrow pointing from the popup toward the trigger. Hidden from assistive technology. */
function PopoverArrow({ ...props }: ComponentProps<typeof Popover.Arrow>) {
  return <Popover.Arrow data-slot="popover-arrow" {...props} />;
}

/** Container for the popover content. Positioned relative to the trigger using CSS anchor positioning with a JavaScript fallback. */
function PopoverPopup({ ...props }: ComponentProps<typeof Popover.Popup>) {
  return <Popover.Popup data-slot="popover-popup" {...props} />;
}

function PopoverRoot({ ...props }: ComponentProps<typeof Popover.Root>) {
  return <Popover.Root data-slot="popover-root" {...props} />;
}

/** Button that toggles the popover visibility. Renders a `<button>` element. */
function PopoverTrigger({ ...props }: ComponentProps<typeof Popover.Trigger>) {
  return <Popover.Trigger data-slot="popover-trigger" {...props} />;
}

type TimeSliderPreviewProps = TimeSlider.PreviewProps;
type TimeSliderFillProps = TimeSlider.FillProps;
type TimeSliderRootProps = TimeSlider.RootProps;
type TimeSliderThumbProps = TimeSlider.ThumbProps;
type TimeSliderTrackProps = TimeSlider.TrackProps;
type TimeSliderValueProps = TimeSlider.ValueProps;
type TimeSliderBufferProps = TimeSlider.BufferProps;
type TimeGroupProps = Time.GroupProps;
type TimeValueProps = Time.ValueProps;
type TimeSeparatorProps = Time.SeparatorProps;
type SliderPreviewProps = Slider.PreviewProps;
type SliderRootProps = Slider.RootProps;
type SliderFillProps = Slider.FillProps;
type SliderThumbProps = Slider.ThumbProps;
type SliderTrackProps = Slider.TrackProps;
type SliderValueProps = Slider.ValueProps;
type SliderBufferProps = Slider.BufferProps;
type SliderThumbnailProps = Slider.ThumbnailProps;
type AlertDialogRootProps = AlertDialog.RootProps;
type AlertDialogPopupProps = AlertDialog.PopupProps;
type AlertDialogCloseProps = AlertDialog.CloseProps;
type AlertDialogTitleProps = AlertDialog.TitleProps;
type AlertDialogDescriptionProps = AlertDialog.DescriptionProps;
type VolumeSliderFillProps = VolumeSlider.FillProps;
type VolumeSliderPreviewProps = VolumeSlider.PreviewProps;
type VolumeSliderRootProps = VolumeSlider.RootProps;
type VolumeSliderThumbProps = VolumeSlider.ThumbProps;
type VolumeSliderTrackProps = VolumeSlider.TrackProps;
type VolumeSliderValueProps = VolumeSlider.ValueProps;
type PopoverArrowProps = Popover.ArrowProps;
type PopoverPopupProps = Popover.PopupProps;
type PopoverRootProps = Popover.RootProps;
type PopoverTriggerProps = Popover.TriggerProps;

export type {
  TimeSliderPreviewProps,
  TimeSliderFillProps,
  TimeSliderRootProps,
  TimeSliderThumbProps,
  TimeSliderTrackProps,
  TimeSliderValueProps,
  TimeSliderBufferProps,
  TimeGroupProps,
  TimeValueProps,
  TimeSeparatorProps,
  SliderPreviewProps,
  SliderRootProps,
  SliderFillProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueProps,
  SliderBufferProps,
  SliderThumbnailProps,
  AlertDialogRootProps,
  AlertDialogPopupProps,
  AlertDialogCloseProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  VolumeSliderFillProps,
  VolumeSliderPreviewProps,
  VolumeSliderRootProps,
  VolumeSliderThumbProps,
  VolumeSliderTrackProps,
  VolumeSliderValueProps,
  PopoverArrowProps,
  PopoverPopupProps,
  PopoverRootProps,
  PopoverTriggerProps,
};

// slot component
export {
  Poster,
  BufferingIndicator,
  PlayButton,
  SeekButton,
  FullscreenButton,
  PiPButton,
  CastButton,
  CaptionsButton,
  PlaybackRateButton,
  Video,
  HotkeyAction,
  GestureAction,
  MuteButton,
  Thumbnail,
};

export {};

// generated wrapper
export {
  Overlay,
  BufferingIcon,
  HotkeyWrapper,
  GestureWrapper,
  VideoPlayer,
  TimeLine,
  TimeLinePreview,
  ErrorDialogContent,
};

// customized component
export {
  ControlsRoot,
  ControlsGroup,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPopup,
  TooltipArrow,
  ErrorDialogRoot,
  ErrorDialogPopup,
  ErrorDialogClose,
  ErrorDialogDescription,
  ErrorDialogTitle,
  TimeSliderRoot,
  TimeSliderBuffer,
  TimeSliderFill,
  TimeSliderPreview,
  TimeSliderThumb,
  TimeSliderTrack,
  TimeSliderValue,
  TimeValue,
  TimeGroup,
  TimeSeparator,
  SliderRoot,
  SliderBuffer,
  SliderFill,
  SliderPreview,
  SliderThumb,
  SliderThumbnail,
  SliderTrack,
  SliderValue,
  AlertDialogRoot,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogTitle,
  VolumeSliderFill,
  VolumeSliderPreview,
  VolumeSliderRoot,
  VolumeSliderThumb,
  VolumeSliderTrack,
  VolumeSliderValue,
  PopoverArrow,
  PopoverPopup,
  PopoverRoot,
  PopoverTrigger,
};

// hooks derived from component
export { useMedia, usePlayer };

// re-exported comps
export { GestureCoordinator, HotkeyCoordinator };

// re-exported hooks
export {
  useAlertDialogContext,
  useAriaKeyShortcuts,
  useButton,
  useComposedRefs,
  useContainer,
  useContainerAttach,
  useDestroy,
  useDoubleTapGesture,
  useErrorDialogContext,
  useHotkey,
  useLatestRef,
  useMediaAttach,
  useMediaInstance,
  useOptionalPlayer,
  usePlayerContext,
  usePopoverContext,
  useTooltipContext,
  useSelector,
  useSlider,
  useStore,
  useTapGesture,
};

// re-exported const
export {
  audioFeatures,
  backgroundFeatures,
  bufferFeature,
  controlsFeature,
  errorFeature,
  fullscreenFeature,
  selectBuffer,
  selectControls,
  selectError,
  selectFullscreen,
  selectPiP,
  selectPlayback,
  selectPlaybackRate,
  selectSource,
  selectTextTrack,
  selectTime,
  selectVolume,
  volumeFeature,
  sourceFeature,
  textTrackFeature,
  timeFeature,
  pipFeature,
  playbackFeature,
  playbackRateFeature,
};

// re-exported utility function
export {
  applyElementProps,
  applyStateDataAttrs,
  composeRefs,
  createAlertDialog,
  createButton,
  createDismissLayer,
  createDoubleTapGesture,
  createHotkey,
  createPopover,
  createSelector,
  createSlider,
  createTapGesture,
  createThumbnail,
  createTooltip,
  createTransition,
  createWheelStep,
  definePlayerFeature,
  findGestureCoordinator,
  findHotkeyCoordinator,
  getAnchorNameStyle,
  getAnchorPositionStyle,
  getGestureCoordinator,
  getManualPositionStyle,
  getPercentFromPointerEvent,
  getPopupPositionRect,
  getPositioningCSSVars,
  getSliderCSSVars,
  getSliderPreviewStyle,
  getStateDataAttrs,
  getTimeSliderCSSVars,
  isHotkeyToggleAction,
  logMissingFeature,
  matchesHotkeyEvent,
  mergeProps,
  parseHotkeyPattern,
  renderElement,
  resolveGestureAction,
  resolveHotkeyAction,
  resolveOffsets,
  shallowEqual,
  toAriaKeyShortcut,
};

export { features };
