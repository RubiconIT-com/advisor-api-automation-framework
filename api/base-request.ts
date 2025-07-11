import {APIRequestContext, APIResponse, request} from '@playwright/test';
import * as dotenv from 'dotenv';
import LogUtils from "../utils/log-utils";

dotenv.config();
const logger = new LogUtils();

export class BaseRequest {
    private readonly baseUrl: string | undefined;
    private requestContext: APIRequestContext | undefined;

    constructor() {
        this.baseUrl = process.env.API_URL;
        if (!this.baseUrl) {
            throw new Error('Base URL is not defined. Check your .env file or configuration.');
        }
    }

    async init(token?: string, additionalHeaders?: Record<string, string>) {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['Authorization'] = token;
        }

        if (additionalHeaders) {
            Object.assign(headers, additionalHeaders);
        }

        this.requestContext = await request.newContext({
            baseURL: this.baseUrl,
            extraHTTPHeaders: headers,
        });
    }

    private getRequestContext(): APIRequestContext {
        if (!this.requestContext) {
            throw new Error('Request context is not initialized. Call init() first.');
        }
        return this.requestContext;
    }

    async getRequest(path: string, token?: string, param?: string): Promise<APIResponse> {
        const url = param ? `${path}/${param}` : path;
        logger.info(`Sending GET request to: ${this.baseUrl}${url}`);
        await this.init(token);
        return await this.getRequestContext().get(url);
    }

    async getRequestWithParams(path: string, token?: string, queryParams?: Record<string, any>): Promise<APIResponse> {
        const params = queryParams ? new URLSearchParams(queryParams as Record<string, string>).toString() : "";
        const url = params ? `${path}?${params}` : path;

        logger.info(`Sending GET request to: ${this.baseUrl}${url}`);

        await this.init(token);
        return await this.getRequestContext().get(url);
    }

    async postRequest(path: string, payload: object, token?: string) {
        logger.info(`Sending POST request to: ${this.baseUrl}${path}`);
        await this.init(token);
        return await this.getRequestContext().post(path, {
            data: payload,
        });
    }

    async patchRequest(path: string, payload: object, param: string, token?: string): Promise<APIResponse> {
        const url = `${path}/${param}`;
        logger.info(`Sending PATCH request to: ${this.baseUrl}${url}`);
        await this.init(token);
        return await this.getRequestContext().patch(url, {
            data: payload,
        });
    }

    async putRequest(path: string, payload: object, param: string, token?: string): Promise<APIResponse> {
        const url = `${path}/${param}`;
        logger.info(`Sending PUT request to: ${this.baseUrl}${url}`);
        await this.init(token);
        return await this.getRequestContext().put(url, {
            data: payload,
        });
    }

    async putRequestNoPayload(path: string, param: string, token?: string): Promise<APIResponse> {
        const url = `${path}/${param}`;
        logger.info(`Sending PUT request to: ${this.baseUrl}${url}`);
        await this.init(token);
        return await this.getRequestContext().put(url, {});
    }

    async deleteRequest(path: string, param: string, token?: string): Promise<APIResponse> {
        const url = `${path}/${param}`;
        logger.info(`Sending DELETE request to: ${this.baseUrl}${url}`);
        await this.init(token);
        return await this.getRequestContext().delete(url);
    }
}