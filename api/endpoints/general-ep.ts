import {BaseRequest} from "../base-request";

export class GeneralEP extends BaseRequest {
    private homeURL: string = "home/";
    private coreJobsURL: string = "core/jobs";
    private dataSourcesURL: string = "core/data-sources";
    private adminURL: string = "admin";
    private userProfileURL: string = "user/profile";
    private userPreferencesURL: string = "user/preferences";
    private userPasswordURL: string = "user/password";

    async getUserPasswordRequest(auth: string) {
        return await this.getRequest(this.userPasswordURL, auth);
    }

    async getUserPreferencesRequest(auth: string) {
        return await this.getRequest(this.userPreferencesURL, auth);
    }

    async getUserProfileRequest(auth: string) {
        return await this.getRequest(this.userProfileURL, auth);
    }

    async getAdminRequest(auth: string) {
        return await this.getRequest(this.adminURL, auth);
    }

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