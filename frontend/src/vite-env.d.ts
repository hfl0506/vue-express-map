/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
