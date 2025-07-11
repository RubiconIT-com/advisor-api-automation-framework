import {BaseRequest} from "../base-request";

export class DcimEp extends BaseRequest {
    private contractsURL: string = "api/dcim/contracts/";
    private enterpriseSoftwareURL: string = "api/dcim/enterprise-software/";
    private locationsURL: string = "api/dcim/locations/";
    private devicesURL: string = "api/dcim/devices/";

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
}