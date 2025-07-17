import { test, expect } from '@playwright/test';
import {ExtrasEp} from "../api/endpoints/extras-ep";

const apiToken = process.env.API_TOKEN;

test.describe('Extras Endpoints Tests', () => {

    test('Get extras advisor anytime request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getAdvisorAnytimeRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras file manager request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getFileManagerRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras scripts request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getScriptsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras changelog request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getChangelogRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras report request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getReportsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras custom fields request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getCustomFieldsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras custom links request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getCustomLinksRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras export templates request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getExportTemplatesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras webhooks request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getWebhooksRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras saved filters request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getSavedFiltersRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras tags request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getTagsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras journal entries request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getJournalEntriesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras qs service request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getQsDevicesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras qs eox request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getQsEoxRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras qs spend request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getQsSpendRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get extras SaaS provider request test', async () => {
        const extrasEp = new ExtrasEp();
        const resp = await extrasEp.getSaasProviderRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });
});