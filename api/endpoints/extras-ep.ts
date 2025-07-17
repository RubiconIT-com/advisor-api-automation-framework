import {BaseRequest} from "../base-request";

export class ExtrasEp extends BaseRequest {
    private advisorAnytimeUrl: string = "api/extras/advisor-anytime/";
    private fileManagerUrl: string = "extras/file-manager/";
    private scriptsUrl: string = "api/extras/scripts/";
    private changelogUrl: string = "extras/changelog/";
    private reportsUrl: string = "api/extras/reports/";
    private customFieldsUrl: string = "api/extras/custom-fields/";
    private customLinksUrl: string = "api/extras/custom-links/";
    private exportTemplatesUrl: string = "api/extras/export-templates/";
    private webhooksUrl: string = "api/extras/webhooks/";
    private savedFiltersUrl: string = "api/extras/saved-filters/";
    private tagsUrl: string = "api/extras/tags/";
    private journalEntriesUrl: string = "api/extras/journal-entries/";
    private qsDevicesURL: string = "extras/service/qs-devices/";
    private qsEoxURL: string = "extras/service/qs-eox/";
    private qsSpendURL: string = "extras/service/qs-spend/";
    private saasProviderURL: string = "extras/service/saas-provider/";

    async getJournalEntriesRequest(auth: string) {
        return await this.getRequest(this.journalEntriesUrl, auth);
    }

    async getTagsRequest(auth: string) {
        return await this.getRequest(this.tagsUrl, auth);
    }

    async getSavedFiltersRequest(auth: string) {
        return await this.getRequest(this.savedFiltersUrl, auth);
    }

    async getWebhooksRequest(auth: string) {
        return await this.getRequest(this.webhooksUrl, auth);
    }

    async getExportTemplatesRequest(auth: string) {
        return await this.getRequest(this.exportTemplatesUrl, auth);
    }

    async getCustomLinksRequest(auth: string) {
        return await this.getRequest(this.customLinksUrl, auth);
    }

    async getCustomFieldsRequest(auth: string) {
        return await this.getRequest(this.customFieldsUrl, auth);
    }

    async getReportsRequest(auth: string) {
        return await this.getRequest(this.reportsUrl, auth);
    }

    async getChangelogRequest(auth: string) {
        return await this.getRequest(this.changelogUrl, auth);
    }

    async getScriptsRequest(auth: string) {
        return await this.getRequest(this.scriptsUrl, auth);
    }

    async getFileManagerRequest(auth: string) {
        return await this.getRequest(this.fileManagerUrl, auth);
    }

    async getAdvisorAnytimeRequest(auth: string) {
        return await this.getRequest(this.advisorAnytimeUrl, auth);
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