import { test, expect } from '@playwright/test';
import {DcimEp} from "../api/endpoints/dcim-ep";

const apiToken = process.env.API_TOKEN;
const param = {
    "per_page":"5"
}

test.describe('Dcim Endpoints Tests', () => {

    test('Get contracts request test', async () => {
        const dcimEp = new DcimEp();
        const contractsResp = await dcimEp.getContractsRequest(apiToken!, param);

        expect(contractsResp.status()).toEqual(200);
        expect(contractsResp.json()).not.toBeNull();
    });

    test('Get enterprise software request test', async () => {
        const dcimEp = new DcimEp();
        const enterpriseSoftwareResp = await dcimEp.getEnterpriseSoftwareRequest(apiToken!, param);

        expect(enterpriseSoftwareResp.status()).toEqual(200);
        expect(enterpriseSoftwareResp.json()).not.toBeNull();
    });

    test('Get locations request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getLocationsRequest(apiToken!, param);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim devices request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimDevicesRequest(apiToken!);
        console.log(await response.json());
        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });
});