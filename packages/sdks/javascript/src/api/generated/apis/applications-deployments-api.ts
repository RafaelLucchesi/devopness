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
import { ApplicationDeployment } from '../../generated/models';

/**
 * ApplicationsDeploymentsApiService - Auto-generated
 */
export class ApplicationsDeploymentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Trigger a new deployment for current application
     * @param {number} applicationId Numeric ID of the application to be deployed
     * @param {ApplicationDeployment} [applicationDeployment] A JSON object containing deployment parameters
     */
    public async deployApplication(applicationId: number, applicationDeployment?: ApplicationDeployment): Promise<ApiResponse<void>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'deployApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/deployments' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ApplicationDeployment>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), applicationDeployment);
        return new ApiResponse(response);
    }
}
