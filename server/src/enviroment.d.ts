import { DataSourceOptions } from 'typeorm';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_TYPE: 'postgres';
            PORT: string;
            POSTGRES_PORT: string;
            POSTGRES_USER: string;
            POSTGRES_PASSWORD: string;
            POSTGRES_DB: string;
            JWT_ACCESS_KEY: string;
            JWT_REFRESH_KEY: string;
            CLIENT_URL: string;
        }
    }
}

export {};
