import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string(),
  },
  client: {
    APP_NAME: z.string().min(1),
    SITE_DOMAIN: z.string().min(1),
  },

  APP_NAME: import.meta.env.APP_NAME,
  SITE_DOMAIN: import.meta.env.SITER_DOMAIN,
});
