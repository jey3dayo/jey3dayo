import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {},
  client: {
    APP_NAME: z.string().min(1),
  },
  runtimeEnv: {
    APP_NAME: process.env?.APP_NAME,
  },
});

export { env };
