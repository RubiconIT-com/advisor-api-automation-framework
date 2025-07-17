import { test, expect } from '@playwright/test';
import {GeneralEP} from "../api/endpoints/general-ep";

const apiToken = process.env.API_TOKEN;

test.describe('General Endpoints Tests', () => {

    test('Get home request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getHomeRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get core jobs request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getCoreJobsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get data source request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getDataSourcesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });
});