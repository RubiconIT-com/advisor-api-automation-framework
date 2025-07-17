import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

export const enum EnvironmentTarget {
    DEFAULT = "dev",
}

const ENV = process.env.TEST_ENV || EnvironmentTarget.DEFAULT;
dotenv.config({ path: path.resolve(__dirname, `profiles/.env.${ENV}`) });

if (!process.env.API_URL) {
    throw new Error(`Environment variable 'URL' is not set in profiles/.env.${ENV}`);
}

defineConfig({
    testDir: './tests',
    timeout: 100000,
    expect: { timeout: 15000 },
    fullyParallel: true,
    use: {
        baseURL: process.env.API_URL,
        headless: true,
        screenshot: 'only-on-failure',
    },
    reporter: [
        ['html'],
        ['dot'],
        ['junit', { outputFile: 'results.xml' }],
    ],
});