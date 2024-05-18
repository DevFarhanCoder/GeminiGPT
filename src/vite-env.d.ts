/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string;
    // add other environment variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
