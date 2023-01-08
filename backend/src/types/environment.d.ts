declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      PORT: string;
      ORGIN_URL: string;
    }
  }
}

export {};
