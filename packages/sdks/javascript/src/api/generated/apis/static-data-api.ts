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
import { ApplicationOptions } from '../../generated/models';
import { CloudInstance } from '../../generated/models';
import { CloudProvider } from '../../generated/models';
import { CloudProviderService } from '../../generated/models';
import { CronJobOptions } from '../../generated/models';
import { EnvironmentOptions } from '../../generated/models';
import { Permission } from '../../generated/models';
import { ServiceOptions } from '../../generated/models';

/**
 * StaticDataApiService - Auto-generated
 */
export class StaticDataApiService extends ApiBaseService {
    /**
     * 
     * @summary Get details of a single cloud provider service
     * @param {string} serviceCode The unique id of the service
     */
    public async getCloudProviderService(serviceCode: string): Promise<ApiResponse<CloudProviderService>> {
        if (serviceCode === null || serviceCode === undefined) {
            throw new ArgumentNullException('serviceCode', 'getCloudProviderService');
        }
        
        let queryString = '';

        const requestUrl = '/static/cloud-provider-services/{service_code}' + (queryString? `?${queryString}` : '');

        const response = await this.get <CloudProviderService>(requestUrl.replace(`{${"service_code"}}`, encodeURIComponent(String(serviceCode))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists options of the applications
     */
    public async listApplicationOptions(): Promise<ApiResponse<ApplicationOptions>> {
        
        let queryString = '';

        const requestUrl = '/static/applications' + (queryString? `?${queryString}` : '');

        const response = await this.get <ApplicationOptions>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists cloud provider service regions
     * @param {string} serviceCode The unique id of the service
     * @param {string} regionCode The unique id of the region
     */
    public async listCloudProviderServiceRegions(serviceCode: string, regionCode: string): Promise<ApiResponse<Array<CloudInstance>>> {
        if (serviceCode === null || serviceCode === undefined) {
            throw new ArgumentNullException('serviceCode', 'listCloudProviderServiceRegions');
        }
        if (regionCode === null || regionCode === undefined) {
            throw new ArgumentNullException('regionCode', 'listCloudProviderServiceRegions');
        }
        
        let queryString = '';

        const requestUrl = '/static/cloud-provider-services/{service_code}/regions/{region_code}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CloudInstance>>(requestUrl.replace(`{${"service_code"}}`, encodeURIComponent(String(serviceCode))).replace(`{${"region_code"}}`, encodeURIComponent(String(regionCode))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists cloud providers
     */
    public async listCloudProviders(): Promise<ApiResponse<Array<CloudProvider>>> {
        
        let queryString = '';

        const requestUrl = '/static/cloud-providers' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CloudProvider>>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists options of the cronjobs
     */
    public async listCronJobOptions(): Promise<ApiResponse<CronJobOptions>> {
        
        let queryString = '';

        const requestUrl = '/static/cronjobs' + (queryString? `?${queryString}` : '');

        const response = await this.get <CronJobOptions>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists options of the environments
     */
    public async listEnvironmentOptions(): Promise<ApiResponse<EnvironmentOptions>> {
        
        let queryString = '';

        const requestUrl = '/static/environments' + (queryString? `?${queryString}` : '');

        const response = await this.get <EnvironmentOptions>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists available permissions
     */
    public async listPermissions(): Promise<ApiResponse<Array<Permission>>> {
        
        let queryString = '';

        const requestUrl = '/static/permissions' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<Permission>>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Lists options of the services
     */
    public async listServiceOptions(): Promise<ApiResponse<ServiceOptions>> {
        
        let queryString = '';

        const requestUrl = '/static/services' + (queryString? `?${queryString}` : '');

        const response = await this.get <ServiceOptions>(requestUrl);
        return new ApiResponse(response);
    }
}
