import {BaseRequest} from "../base-request";

export class GeneralEP extends BaseRequest {
    private homeURL: string = "home/";

    async getHomeRequest(auth: string) {
        return await this.getRequest(this.homeURL, auth);
    }
}