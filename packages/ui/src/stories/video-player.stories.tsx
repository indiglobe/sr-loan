import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BufferingIcon,
  BufferingIndicator,
  ControlsRoot,
  FullscreenButton,
  GestureAction,
  GestureWrapper,
  HotkeyAction,
  HotkeyWrapper,
  Overlay,
  PiPButton,
  PlayButton,
  SeekButton,
  SliderThumbnail,
  TimeLine,
  TimeLinePreview,
  TimeSliderBuffer,
  TimeSliderFill,
  TimeSliderRoot,
  TimeSliderThumb,
  TimeSliderTrack,
  TimeSliderValue,
  TimeValue,
  TooltipPopup,
  TooltipRoot,
  TooltipTrigger,
  usePlayer,
  Video,
  VideoPlayer,
  SliderThumb,
} from "../components/video-player";
import { cn } from "@repo/styles/cn";
import { ComponentProps } from "react";
import { Button } from "../components/button";
import { FaPause, FaPlay } from "react-icons/fa";
import {
  MdPictureInPicture,
  MdPictureInPictureAlt,
  MdReplay10,
} from "react-icons/md";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { ImSpinner10 } from "react-icons/im";

function VideoUI({
  videoSource,
}: {
  videoSource: ComponentProps<typeof Video>["src"];
}) {
  return (
    <VideoPlayer>
      <Video src={videoSource} className={cn(`aspect-video`)} />
      <Overlay />
      <BufferingIndicator>
        <BufferingIcon>
          <ImSpinner10 />
        </BufferingIcon>
      </BufferingIndicator>

      <ControlsRoot>
        <TooltipRoot>
          <TooltipTrigger asChild>
            <PlayButton asChild>
              <TooltipButton>
                <PlayPauseIcon />
              </TooltipButton>
            </PlayButton>
          </TooltipTrigger>
          <TooltipPopup>
            <PlayPauseText />
          </TooltipPopup>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger asChild>
            <SeekButton asChild seconds={-10}>
              <TooltipButton>
                <Seek10SecMinusIcon />
              </TooltipButton>
            </SeekButton>
          </TooltipTrigger>
          <TooltipPopup>
            <Seek10SecMinusText />
          </TooltipPopup>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger asChild>
            <SeekButton asChild seconds={10}>
              <TooltipButton>
                <Seek10SecPlusIcon />
              </TooltipButton>
            </SeekButton>
          </TooltipTrigger>
          <TooltipPopup>
            <Seek10SecPlusText />
          </TooltipPopup>
        </TooltipRoot>

        <TimeLine>
          <TimeValue type="current" />

          {/* SLIDER */}
          <TimeSliderRoot>
            <TimeSliderTrack>
              <TimeSliderBuffer />
              <TimeSliderFill />
            </TimeSliderTrack>
            <SliderThumb />

            <TimeSliderThumb />

            {/* PREVIEW */}
            <TimeLinePreview>
              <SliderThumbnail className="max-w-45" />
              <TimeSliderFill />
              <TimeSliderTrack />

              <TimeSliderValue type="pointer" className="text-center text-xs" />
            </TimeLinePreview>
          </TimeSliderRoot>

          <TimeValue type="duration" className="text-xs tabular-nums" />
        </TimeLine>

        <TooltipRoot>
          <TooltipTrigger asChild>
            <PiPButton asChild>
              <TooltipButton>
                <PipIcon />
              </TooltipButton>
            </PiPButton>
          </TooltipTrigger>
          <TooltipPopup>
            <PipText />
          </TooltipPopup>
        </TooltipRoot>

        <TooltipRoot>
          <TooltipTrigger asChild>
            <FullscreenButton asChild>
              <TooltipButton>
                <FullscreenIcon />
              </TooltipButton>
            </FullscreenButton>
          </TooltipTrigger>
          <TooltipPopup>
            <FullscreenText />
          </TooltipPopup>
        </TooltipRoot>
      </ControlsRoot>

      <HotkeyWrapper>
        <HotkeyAction keys="Space" action="togglePaused" />
        <HotkeyAction keys="k" action="togglePaused" />
        <HotkeyAction keys="m" action="toggleMuted" />
        <HotkeyAction keys="f" action="toggleFullscreen" />
        <HotkeyAction keys="c" action="toggleSubtitles" />
        <HotkeyAction keys="i" action="togglePictureInPicture" />
        <HotkeyAction keys="ArrowRight" action="seekStep" value={5} />
        <HotkeyAction keys="ArrowLeft" action="seekStep" value={-5} />
        <HotkeyAction keys="ArrowUp" action="volumeStep" value={0.05} />
        <HotkeyAction keys="ArrowDown" action="volumeStep" value={-0.05} />
        <HotkeyAction keys="0-9" action="seekToPercent" />
        <HotkeyAction keys="Home" action="seekToPercent" value={0} />
        <HotkeyAction keys="End" action="seekToPercent" value={100} />
      </HotkeyWrapper>

      <GestureWrapper>
        <GestureAction
          type="tap"
          action="togglePaused"
          pointer="mouse"
          region="center"
        />

        <GestureAction type="tap" action="toggleControls" pointer="touch" />

        <GestureAction
          type="doubletap"
          action="seekStep"
          value={-10}
          region="left"
        />

        <GestureAction
          type="doubletap"
          action="toggleFullscreen"
          region="center"
        />

        <GestureAction
          type="doubletap"
          action="seekStep"
          value={10}
          region="right"
        />
      </GestureWrapper>
    </VideoPlayer>
  );
}

function PlayPauseIcon() {
  const paused = usePlayer((s) => s.paused);
  return <>{paused ? <FaPlay /> : <FaPause />}</>;
}

function PlayPauseText() {
  const paused = usePlayer((s) => s.paused);
  return <>{paused ? "Play" : "Paused"}</>;
}

function Seek10SecPlusIcon() {
  return <MdReplay10 className={cn(`rotate-y-180`)} />;
}

function Seek10SecPlusText() {
  return <>+10 sec</>;
}

function Seek10SecMinusIcon() {
  return <MdReplay10 className={cn(`rotate-y-0`)} />;
}

function Seek10SecMinusText() {
  return <>-10 sec</>;
}

function FullscreenIcon() {
  const fullscreen = usePlayer((s) => s.fullscreen);

  return fullscreen ? (
    <AiOutlineFullscreenExit className="size-5" />
  ) : (
    <AiOutlineFullscreen className="size-5" />
  );
}

function FullscreenText() {
  const fullscreen = usePlayer((s) => s.fullscreen);
  return <>{fullscreen ? "Exit fullscreen" : "Enter fullscreen"}</>;
}

function PipIcon() {
  const pip = usePlayer((s) => s.pip);

  return pip ? (
    <MdPictureInPicture className="size-5" />
  ) : (
    <MdPictureInPictureAlt className="size-5" />
  );
}

function PipText() {
  const pip = usePlayer((s) => s.pip);
  return <>{pip ? "Exit picture-in-picture" : "Enter picture-in-picture"}</>;
}

function TooltipButton({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button
      variant={"ghost"}
      corner={"circle"}
      className={cn(`bg-black/50`, className)}
      {...props}
    />
  );
}

const meta: Meta<typeof VideoUI> & TypedMetaOptions = {
  component: VideoUI,

  argTypes: {
    videoSource: {
      type: "string",
    },
  },

  args: {
    videoSource: "http://localhost:8080/videos/course/file_14.mp4",
  },
};

export default meta;

type Story = StoryObj<typeof VideoUI>;

export const VideoUIStory: Story = {
  args: {},
};
