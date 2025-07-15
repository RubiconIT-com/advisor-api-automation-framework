import {BaseRequest} from "../base-request";

export class TenancyEp extends BaseRequest {
    private tenantsUrl: string = "api/tenancy/tenants/";
    private tenantGroupsUrl: string = "api/tenancy/tenant-groups/";
    private contactsUrl: string = "api/tenancy/contacts/";
    private contactGroupsUrl: string = "api/tenancy/contact-groups/";
    private contactRolesUrl: string = "api/tenancy/contact-roles/";
    private contactAssignmentsUrl: string = "api/tenancy/contact-assignments/";

    async getContactAssignmentsRequest(auth: string) {
        return await this.getRequest(this.contactAssignmentsUrl, auth);
    }

    async getContactRolesRequest(auth: string) {
        return await this.getRequest(this.contactRolesUrl, auth);
    }

    async getContactGroupsRequest(auth: string) {
        return await this.getRequest(this.contactGroupsUrl, auth);
    }

    async getContactsRequest(auth: string) {
        return await this.getRequest(this.contactsUrl, auth);
    }

    async getTenantsRequest(auth: string) {
        return await this.getRequest(this.tenantsUrl, auth);
    }

    async getTenantGroupsRequest(auth: string) {
        return await this.getRequest(this.tenantGroupsUrl, auth);
    }
}