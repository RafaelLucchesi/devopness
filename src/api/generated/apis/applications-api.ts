/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Application } from '../../generated/models';

/**
 * ApplicationsApiService - Auto-generated
 */
export class ApplicationsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given application
     * @param {number} applicationId Numeric ID of the application to be deleted
     */
    public async deleteApplication(applicationId: number): Promise<ApiResponse<Application>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'deleteApplication');
        }
        const response = await this.delete <Application>(`/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get an application by ID
     * @param {number} applicationId Numeric ID of the application to get
     */
    public async getApplication(applicationId: number): Promise<ApiResponse<Application>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'getApplication');
        }
        const response = await this.get <Application>(`/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing application
     * @param {number} applicationId Numeric ID of the application to be updated
     * @param {Application} application A JSON object containing application data
     */
    public async updateApplication(applicationId: number, application: Application): Promise<ApiResponse<void>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'updateApplication');
        }
        if (application === null || application === undefined) {
            throw new ArgumentNullException('application', 'updateApplication');
        }
        const response = await this.put <void, Application>(`/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), application);
        return new ApiResponse(response);
    }
}
