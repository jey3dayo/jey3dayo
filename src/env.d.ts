/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly SITE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
