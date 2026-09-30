import z from "zod";

export const participationInformation = z.object({
  userId: z.string(),
  name: z.string(),
  role: z.enum(["admin", "basic"]),
  type: z.enum(["participation"]),
});

export const messageDetails = z.object({
  userId: z.string(),
  name: z.string(),
  role: z.enum(["admin", "basic"]),
  message: z.string(),
  type: z.enum(["message"]),
});

export type TMessageDetails = z.infer<typeof messageDetails>;
export type TParticipationInformation = z.infer<
  typeof participationInformation
>;

export interface ServerToClientEvents {
  "chat-joined": (data: TParticipationInformation) => void;
  "chat-left": (data: TParticipationInformation) => void;
  "message-recived": (data: TMessageDetails) => void;
}

export interface ClientToServerEvents {
  "join-chat": (data: TParticipationInformation) => void;
  "leave-chat": (data: TParticipationInformation) => void;
  "send-message": (data: TMessageDetails) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {}
