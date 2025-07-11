import {BaseRequest} from "../base-request";

export class GeneralEP extends BaseRequest {
    private homeURL: string = "home/";
    private qsDevicesURL: string = "extras/service/qs-devices/";
    private qsEoxURL: string = "extras/service/qs-eox/";
    private qsSpendURL: string = "extras/service/qs-spend/";
    private saasProviderURL: string = "extras/service/saas-provider/";

    async getHomeRequest(auth: string) {
        return await this.getRequest(this.homeURL, auth);
    }

    async getQsDevicesRequest(auth: string) {
        return await this.getRequest(this.qsDevicesURL, auth);
    }

    async getQsEoxRequest(auth: string) {
        return await this.getRequest(this.qsEoxURL, auth);
    }

    async getQsSpendRequest(auth: string) {
        return await this.getRequest(this.qsSpendURL, auth);
    }

    async getSaasProviderRequest(auth: string) {
        return await this.getRequest(this.saasProviderURL, auth);
    }
}