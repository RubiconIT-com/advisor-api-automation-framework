import {BaseRequest} from "../base-request";

export class DcimEp extends BaseRequest {
    private contractsURL: string = "api/dcim/contracts/";
    private enterpriseSoftwareURL: string = "api/dcim/enterprise-software/";
    private locationsURL: string = "api/dcim/locations/";
    private devicesURL: string = "api/dcim/devices/";
    private cpntsURL: string = "api/accounts/";
    private accountsURL: string = "api/dcim/cpnts/";
    private deviceTypesURL: string = "api/dcim/device-types/";
    private deviceRolesURL: string = "api/dcim/device-roles/";
    private dcimCpntsURL: string = "api/dcim/cpnts/";
    private dcimCpntTypesURL: string = "api/dcim/cpnt-types/";
    private dcimVirtualChassisURL: string = "api/dcim/virtual-chassis/";
    private dcimVirtualDeviceContextsURL: string = "api/dcim/virtual-device-contexts/";
    private dcimEnterpriseSoftwareURL: string = "api/dcim/enterprise-software/";
    private dcimSoftwareComponentsURL: string = "api/dcim/software-components/";
    private dcimAccountsURL: string = "api/dcim/accounts/";
    private dcimSuitesURL: string = "api/dcim/suites/";
    private dcimPlatformsURL: string = "api/dcim/platforms/";
    private dcimSoftwareURL: string = "api/dcim/software/";
    private dcimVendorsURL: string = "api/dcim/vendors/";
    private dcimVendorTypesURL: string = "api/dcim/vendor-types/";
    private dcimContractTypesURL: string = "api/dcim/contract-types/";
    private dcimContractLevelsURL: string = "api/dcim/contract-levels/";
    private dcimProjectsURL: string = "api/dcim/projects/";
    private dcimBusinessUnitsURL: string = "api/dcim/business-units/";
    private dcimDepartmentsURL: string = "api/dcim/departments/";
    private dcimOrdersURL: string = "api/dcim/orders/";
    private dcimRulesEngineURL: string = "api/dcim/rules-engine/";
    private dcimSitesURL: string = "api/dcim/sites/";
    private dcimRegionsURL: string = "api/dcim/regions/";
    private dcimSiteGroupsURL: string = "api/dcim/site-groups/";
    private dcimRacksURL: string = "api/dcim/racks/";
    private dcimRackRolesURL: string = "api/dcim/rack-roles/";
    private dcimRackReservationsURL: string = "api/dcim/rack-reservations/";

    async getDcimRackReservationsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimRackReservationsURL, auth, params);
    }

    async getDcimRackRolesRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimRackRolesURL, auth, params);
    }

    async getDcimRacksRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimRacksURL, auth, params);
    }

    async getDcimSiteGroupsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimSiteGroupsURL, auth, params);
    }

    async getDcimRegionsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimRegionsURL, auth, params);
    }

    async getDcimSitesRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimSitesURL, auth, params);
    }

    async getDcimRulesEngineRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimRulesEngineURL, auth, params);
    }

    async getDcimOrdersRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimOrdersURL, auth, params);
    }

    async getDcimDepartmentsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimDepartmentsURL, auth, params);
    }

    async getDcimBusinessUnitsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimBusinessUnitsURL, auth, params);
    }

    async getDcimProjectsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimProjectsURL, auth, params);
    }

    async getDcimContractLevelsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimContractLevelsURL, auth, params);
    }

    async getDcimContractTypesRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimContractTypesURL, auth, params);
    }

    async getDcimVendorTypesRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimVendorTypesURL, auth, params);
    }

    async getDcimVendorsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimVendorsURL, auth, params);
    }
    async getDcimSoftwareRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimSoftwareURL, auth, params);
    }

    async getDcimPlatformsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimPlatformsURL, auth, params);
    }

    async getDcimSuitesRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimSuitesURL, auth, params);
    }

    async getDcimAccountsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimAccountsURL, auth, params);
    }

    async getDcimSoftwareComponentsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimSoftwareComponentsURL, auth, params);
    }

    async getDcimEnterpriseSoftwareRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.dcimEnterpriseSoftwareURL, auth, params);
    }

    async getContractsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.contractsURL, auth, params);
    }

    async getEnterpriseSoftwareRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.enterpriseSoftwareURL, auth, params);
    }

    async getLocationsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.locationsURL, auth, params);
    }

    async getDcimDevicesRequest(auth: string) {
        return await this.getRequest(this.devicesURL, auth);
    }

    async getDcimDevicesWithParamRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.devicesURL, auth, params);
    }

    async getCpntsRequestWithParams(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.cpntsURL, auth, params);
    }

    async getAccountsRequest(auth: string, params?: Record<string, any>) {
        return await this.getRequestWithParams(this.accountsURL, auth, params);
    }

    async getDcimDeviceTypesRequest(auth: string) {
        return await this.getRequest(this.deviceTypesURL, auth);
    }

    async getDcimDeviceRolesRequest(auth: string) {
        return await this.getRequest(this.deviceRolesURL, auth);
    }

    async getDcimCpntsRequest(auth: string) {
        return await this.getRequest(this.dcimCpntsURL, auth);
    }

    async getDcimCpntTypesRequest(auth: string) {
        return await this.getRequest(this.dcimCpntTypesURL, auth);
    }

    async getDcimVirtualDeviceContextsRequest(auth: string) {
        return await this.getRequest(this.dcimVirtualDeviceContextsURL, auth);
    }

    async getDcimVirtualChassisRequest(auth: string) {
        return await this.getRequest(this.dcimVirtualChassisURL, auth);
    }
}