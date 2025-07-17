import {BaseRequest} from "../base-request";

export class GeneralEP extends BaseRequest {
    private homeURL: string = "home/";

    private coreJobsURL: string = "core/jobs";
    private dataSourcesURL: string = "core/data-sources";

    async getDataSourcesRequest(auth: string) {
        return await this.getRequest(this.dataSourcesURL, auth);
    }

    async getCoreJobsRequest(auth: string) {
        return await this.getRequest(this.coreJobsURL, auth);
    }

    async getHomeRequest(auth: string) {
        return await this.getRequest(this.homeURL, auth);
    }
}