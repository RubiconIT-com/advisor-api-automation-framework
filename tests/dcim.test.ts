import {test, expect} from '@playwright/test';
import {DcimEp} from "../api/endpoints/dcim-ep";

const apiToken = process.env.API_TOKEN;
const param = {
    "per_page": "5"
}
const deviceId = "5842";

test.describe('Dcim Endpoints Tests', () => {

    [
        {name: 'per_page', params: {per_page: '5'}},
        {name: 'device_sw_id', params: {device_sw_id: `${deviceId}`}},
        {name: 'device_ea_id', params: {device_ea_id: `${deviceId}`}},
    ].forEach(({name, params}) => {
        test(`Get contracts with ${name} param`, async () => {
            const dcimEp = new DcimEp();
            const response = await dcimEp.getContractsRequest(apiToken!, params);

            expect(response.status()).toBe(200);
            expect(response).not.toBeNull();
        });
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

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim devices with parent_device_id param request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimDevicesWithParamRequest(apiToken!, {"parent_device_id": `${deviceId}`});

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get cpnts request with deviceId param test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getCpntsRequestWithParams(apiToken!, {"device_id": `${deviceId}`});

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get accounts request with deviceId param test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getAccountsRequest(apiToken!, {"device_id": `${deviceId}`});

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });
});