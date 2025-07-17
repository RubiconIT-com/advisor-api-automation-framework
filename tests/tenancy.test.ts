import {test, expect} from '@playwright/test';
import {TenancyEp} from "../api/endpoints/tenancy-ep";

const apiToken = process.env.API_TOKEN;

test.describe('Tenancy Endpoints Tests', () => {

    test('Get tenancy tenants request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getTenantsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get tenancy groups request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getTenantGroupsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get tenancy contacts request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getContactsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get tenancy contact groups request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getContactGroupsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get tenancy contact roles request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getContactRolesRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });

    test('Get tenancy contact assignments request test', async () => {
        const tenancyEp = new TenancyEp();
        const resp = await tenancyEp.getContactAssignmentsRequest(apiToken!);

        expect(resp.status()).toEqual(200);
        expect(await resp.body()).not.toBeNull();
    });
});