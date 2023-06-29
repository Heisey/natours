export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: string;
      PORT: number
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}