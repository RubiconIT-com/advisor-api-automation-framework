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

    test('Get qs service request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getQsDevicesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get qs eox request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getQsEoxRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get qs spend request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getQsSpendRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get SaaS provider request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getSaasProviderRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });
});