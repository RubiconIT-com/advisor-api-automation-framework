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

    test('Get dcim device types request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimDeviceTypesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim device roles request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimDeviceRolesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim cpnts request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimCpntsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim cpnt types request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimCpntTypesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim virtual chassis request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimVirtualChassisRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim virtual device contexts request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimVirtualDeviceContextsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim enterprise software request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimEnterpriseSoftwareRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim software components request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimSoftwareComponentsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim accounts request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimAccountsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim suites request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimSuitesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim platforms request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimPlatformsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim software request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimSoftwareRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim vendors request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimVendorsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim vendor types request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimVendorTypesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim contracts types request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimContractTypesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim contracts levels request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimContractLevelsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim projects request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimProjectsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim business units request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimBusinessUnitsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim departments request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimDepartmentsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim orders request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimOrdersRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim rules engine request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimRulesEngineRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim sites request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimSitesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim regions request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimRegionsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim site groups request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimSiteGroupsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim racks request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimRacksRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim rack roles request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimRackRolesRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });

    test('Get dcim rack reservations request test', async () => {
        const dcimEp = new DcimEp();
        const response = await dcimEp.getDcimRackReservationsRequest(apiToken!);

        expect(response.status()).toEqual(200);
        expect(response.json()).not.toBeNull();
    });
});