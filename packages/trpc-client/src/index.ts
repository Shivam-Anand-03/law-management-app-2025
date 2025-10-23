import { AppRouter , appEnvConfigs} from "@lawcrew/api";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${appEnvConfigs.TRPC_SERVER_API_URI}`,
    }),
  ],
});
