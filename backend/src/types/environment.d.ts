declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      PORT: string;
      ORIGIN_URL: string;
    }
  }
}

export {};
