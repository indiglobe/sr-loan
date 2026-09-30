import z from "zod";

export const newRegisterInformation = z.object({
  userId: z.string(),
  name: z.string(),
  webinarId: z.string(),
  webinarName: z.string(),
});

export type TNewRegisterInformation = z.infer<typeof newRegisterInformation>;

export interface ServerToClientEvents {
  "registration-created": (data: TNewRegisterInformation) => void;
}

export interface ClientToServerEvents {
  "register-for-webinar": (data: TNewRegisterInformation) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {}
