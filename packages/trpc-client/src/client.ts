import { AppRouter } from "@lawcrew/api";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();
