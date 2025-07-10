import {BaseRequest} from "../base-request";

export class GeneralEP extends BaseRequest {
    private downloadReportURL: string = "OKR/DownloadExcel/";

    async downloadReportRequest(auth: string, params: Record<string, any>) {
        return await this.getRequestWithParams(this.downloadReportURL, auth, params);
    }

}