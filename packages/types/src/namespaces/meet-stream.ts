import z from "zod";
import * as mediasoup from "mediasoup";
// import type { DtlsParameters } from "mediasoup/types";

/**
 * Common mediasoup type aliases used throughout the meeting stream system.
 *
 * These aliases avoid importing deeply nested mediasoup types repeatedly and
 * keep the Socket.IO event contracts easier to read.
 */
export type RtpCapabilities = mediasoup.types.RtpCapabilities;
export type RtpParameters = mediasoup.types.RtpParameters;
export type WebRtcTransport = mediasoup.types.WebRtcTransport;
export type DtlsParameters = mediasoup.types.DtlsParameters;

/**
 * Supported media tracks in a meeting.
 *
 * The application currently supports:
 * - microphone audio
 * - camera video
 */
export type MediaKind = "audio" | "video";

/**
 * Participant information required when joining a stream.
 *
 * This information is shared with other participants so clients can display
 * identity information alongside remote media tracks.
 */
export const participationInformation = z.object({
  name: z.string(),
  role: z.enum(["admin", "basic"]),
});

/**
 * Type inferred from participant validation schema.
 */
export type TParticipationInformation = z.infer<
  typeof participationInformation
>;

/**
 * Represents a media Producer available for consumption.
 *
 * A producer belongs to a socket and represents one outgoing media track.
 *
 * For example:
 *
 * - one producer for microphone audio
 * - one producer for camera video
 */
export interface TProducerInfo {
  /**
   * mediasoup producer identifier.
   */
  producerId: string;

  /**
   * Socket owning this producer.
   *
   * Used by clients to attach consumed tracks to the correct participant tile.
   */
  socketId: string;

  /**
   * Type of media produced.
   */
  kind: MediaKind;
}

/**
 * Parameters returned by the server after successfully creating a Consumer.
 *
 * The client uses this information to create a mediasoup-client Consumer and
 * receive the remote MediaStreamTrack.
 */
export interface TConsumerParams {
  /**
   * mediasoup consumer identifier.
   */
  id: string;

  /**
   * Producer that this consumer receives from.
   */
  producerId: string;

  /**
   * Type of consumed media.
   */
  kind: MediaKind;

  /**
   * RTP parameters required by mediasoup-client to create the Consumer.
   */
  rtpParameters: RtpParameters;
}

/**
 * Events emitted from server to connected meeting clients.
 *
 * These events represent:
 * - meeting lifecycle changes
 * - mediasoup negotiation
 * - remote participant updates
 */
export interface ServerToClientEvents {
  /**
   * Fired when a participant joins the meeting.
   */
  "stream-joined": (
    data: TParticipationInformation & {
      socketId: string;
    },
  ) => void;

  /**
   * Fired when a participant intentionally leaves the stream.
   */
  "stream-left": (data: { socketId: string }) => void;

  /**
   * Fired when a socket disconnects unexpectedly.
   */
  "peer-left": (data: { socketId: string }) => void;

  /**
   * Indicates that the meeting has reached its participant limit.
   */
  "room-full": () => void;

  /**
   * Indicates that the meeting again has a space available.
   */
  "space-available": () => void;

  /**
   * Sends mediasoup Router RTP capabilities.
   *
   * The client uses these capabilities to initialize mediasoup-client Device.
   */
  "sent-router-rtp-capabilities": (data: RtpCapabilities) => void;

  /**
   * Confirms successful socket connection.
   */
  "connection-success": (data: { socketId: string }) => void;

  /**
   * Contains the configuration required to create the send transport.
   */
  "sendTransport-created": (
    data: Pick<
      WebRtcTransport,
      "id" | "dtlsParameters" | "iceCandidates" | "iceParameters"
    >,
  ) => void;

  /**
   * Contains the configuration required to create the receive transport.
   */
  "recvTransport-created": (
    data: Pick<
      WebRtcTransport,
      "id" | "dtlsParameters" | "iceCandidates" | "iceParameters"
    >,
  ) => void;

  /**
   * Notification that a mediasoup transport connection completed.
   *
   * Note:
   * The event name intentionally matches the existing implementation.
   */
  "transport-connnected": () => void;

  /**
   * Broadcast when a participant creates a new Producer.
   *
   * Existing clients use this event to consume the newly available track.
   */
  "new-producer": (data: TProducerInfo) => void;

  /**
   * Fired when a single Producer disappears while the owner remains connected.
   *
   * Example:
   * - camera disabled
   * - microphone removed
   */
  "producer-closed": (data: { producerId: string; socketId: string }) => void;
}

/**
 * Events emitted from meeting clients to the server.
 *
 * These events handle:
 * - joining/leaving
 * - mediasoup negotiation
 * - producing and consuming tracks
 */
export interface ClientToServerEvents {
  /**
   * Registers the current participant in the meeting.
   */
  "join-stream": (data: TParticipationInformation) => void;

  /**
   * Removes the participant from the meeting.
   */
  "leave-stream": (data: TParticipationInformation) => void;

  /**
   * Requests creation details for mediasoup transports.
   */
  "request-transport-details": () => void;

  /**
   * Requests currently available remote Producers.
   */
  "get-producers": (callback: (producers: TProducerInfo[]) => void) => void;

  /**
   * Completes DTLS negotiation for a mediasoup transport.
   */
  "connect-transport": (
    options: {
      transportId: string;
      dtlsParameters: DtlsParameters;
    },
    callback: () => void,
  ) => void;

  /**
   * Creates a Producer from a local media track.
   */
  "transport-produce": (
    data: {
      transportId: string;
      kind: MediaKind;
      rtpParameters: RtpParameters;
    },
    callback: (data: { id: string }) => void,
  ) => void;

  /**
   * Creates a Consumer for a remote Producer.
   *
   * Returns null when:
   * - producer does not exist
   * - transport is invalid
   * - RTP capabilities are incompatible
   */
  consume: (
    data: {
      transportId: string;
      producerId: string;
      rtpCapabilities: RtpCapabilities;
    },
    callback: (data: TConsumerParams | null) => void,
  ) => void;

  /**
   * Resumes a Consumer after client-side setup is complete.
   *
   * Consumers are initially paused on the server to avoid receiving media
   * before the client is ready.
   */
  "consumer-resume": (data: { consumerId: string }) => void;
}

/**
 * Internal Socket.IO events exchanged between server instances.
 *
 * Currently only used for health checking.
 */
export interface InterServerEvents {
  ping: () => void;
}

/**
 * Custom per-socket storage.
 *
 * Reserved for future socket-specific metadata.
 */
export interface SocketData {}
