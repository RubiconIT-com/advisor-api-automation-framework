import {BaseRequest} from "../base-request";

export class TenancyEp extends BaseRequest {
    private tenantsUrl: string = "api/tenancy/tenants/";

    async getTenantsRequest(auth: string) {
        return await this.getRequest(this.tenantsUrl, auth);
    }
}