// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";
import useGlobalStore from "@/pages/globalStore";

/**
 * Create a new function
 */
export async function FunctionControllerCreate(params: Definitions.CreateFunctionDto): Promise<{
  error: string;
  data: Paths.FunctionControllerCreate.Responses;
}> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "POST",
    data: params,
  });
}

/**
 * Query function list of an app
 */
export async function FunctionControllerFindAll(
  params: Paths.FunctionControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a function by its name
 */
export async function FunctionControllerFindOne(
  params: Paths.FunctionControllerFindOne.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionControllerFindOne.Responses;
}> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a function
 */
export async function FunctionControllerUpdate(params: Definitions.UpdateFunctionDto): Promise<{
  error: string;
  data: Paths.FunctionControllerUpdate.Responses;
}> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a function
 */
export async function FunctionControllerRemove(
  params: Paths.FunctionControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Compile a function
 */
export async function FunctionControllerCompile(params: Definitions.CompileFunctionDto): Promise<{
  error: string;
  data: Paths.FunctionControllerCompile.Responses;
}> {
  // /v1/apps/{appid}/functions/{name}/compile
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}/compile`, {
    method: "POST",
    data: params,
  });
}

/**
 * Update environment variables (replace all)
 */
export async function EnvironmentVariableControllerUpdateAll(
  params: Paths.EnvironmentVariableControllerUpdateAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.EnvironmentVariableControllerUpdateAll.Responses;
}> {
  // /v1/apps/{appid}/environments
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments`, {
    method: "POST",
    data: params,
  });
}

/**
 * Set a environment variable (create/update)
 */
export async function EnvironmentVariableControllerAdd(
  params: Definitions.CreateEnvironmentDto,
): Promise<{
  error: string;
  data: Paths.EnvironmentVariableControllerAdd.Responses;
}> {
  // /v1/apps/{appid}/environments
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Get environment variables
 */
export async function EnvironmentVariableControllerGet(
  params: Paths.EnvironmentVariableControllerGet.BodyParameters,
): Promise<{
  error: string;
  data: Paths.EnvironmentVariableControllerGet.Responses;
}> {
  // /v1/apps/{appid}/environments
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments`, {
    method: "GET",
    params: params,
  });
}

/**
 * Delete an environment variable by name
 */
export async function EnvironmentVariableControllerDelete(
  params: Paths.EnvironmentVariableControllerDelete.BodyParameters,
): Promise<{
  error: string;
  data: Paths.EnvironmentVariableControllerDelete.Responses;
}> {
  // /v1/apps/{appid}/environments/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/environments/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new bucket
 */
export async function BucketControllerCreate(params: Definitions.CreateBucketDto): Promise<{
  error: string;
  data: Paths.BucketControllerCreate.Responses;
}> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get bucket list of an app
 */
export async function BucketControllerFindAll(
  params: Paths.BucketControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.BucketControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a bucket by name
 */
export async function BucketControllerFindOne(
  params: Paths.BucketControllerFindOne.BodyParameters,
): Promise<{
  error: string;
  data: Paths.BucketControllerFindOne.Responses;
}> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a bucket
 */
export async function BucketControllerUpdate(params: Definitions.UpdateBucketDto): Promise<{
  error: string;
  data: Paths.BucketControllerUpdate.Responses;
}> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a bucket
 */
export async function BucketControllerRemove(
  params: Paths.BucketControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.BucketControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new collection in database
 */
export async function CollectionControllerCreate(params: Definitions.CreateCollectionDto): Promise<{
  error: string;
  data: Paths.CollectionControllerCreate.Responses;
}> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get collection list of an application
 */
export async function CollectionControllerFindAll(
  params: Paths.CollectionControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Definitions.Collection;
}> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get collection by name
 */
export async function CollectionControllerFindOne(
  params: Paths.CollectionControllerFindOne.BodyParameters,
): Promise<{
  error: string;
  data: Definitions.Collection;
}> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a collection
 */
export async function CollectionControllerUpdate(params: Definitions.UpdateCollectionDto): Promise<{
  error: string;
  data: Paths.CollectionControllerUpdate.Responses;
}> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a collection by its name
 */
export async function CollectionControllerRemove(
  params: Paths.CollectionControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.CollectionControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create database policy
 */
export async function PolicyControllerCreate(params: Definitions.CreatePolicyDto): Promise<{
  error: string;
  data: Definitions.DatabasePolicyWithRules;
}> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get database policy list
 */
export async function PolicyControllerFindAll(
  params: Paths.PolicyControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.PolicyControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update database policy
 */
export async function PolicyControllerUpdate(params: Definitions.UpdatePolicyDto): Promise<{
  error: string;
  data: Definitions.DatabasePolicy;
}> {
  // /v1/apps/{appid}/policies/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Remove a database policy
 */
export async function PolicyControllerRemove(
  params: Paths.PolicyControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.PolicyControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/policies/{name}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * The database proxy for database management
 */
export async function DatabaseControllerProxy(
  params: Paths.DatabaseControllerProxy.BodyParameters,
): Promise<{
  error: string;
  data: Paths.DatabaseControllerProxy.Responses;
}> {
  // /v1/apps/{appid}/databases/proxy
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/databases/proxy`, {
    method: "POST",
    data: params,
  });
}

/**
 * Create database policy rule
 */
export async function PolicyRuleControllerCreate(params: Definitions.CreatePolicyRuleDto): Promise<{
  error: string;
  data: Definitions.DatabasePolicyRule;
}> {
  // /v1/apps/{appid}/policies/{name}/rules
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get database policy rules
 */
export async function PolicyRuleControllerFindAll(
  params: Paths.PolicyRuleControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.PolicyRuleControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/policies/{name}/rules
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update database policy rule by collection name
 */
export async function PolicyRuleControllerUpdate(params: Definitions.UpdatePolicyRuleDto): Promise<{
  error: string;
  data: Definitions.DatabasePolicyRule;
}> {
  // /v1/apps/{appid}/policies/{name}/rules/{collection}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules/${_params.collection}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Remove a database policy rule by collection name
 */
export async function PolicyRuleControllerRemove(
  params: Paths.PolicyRuleControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Definitions.DatabasePolicyRule;
}> {
  // /v1/apps/{appid}/policies/{name}/rules/{collection}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.name}/rules/${_params.collection}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new website
 */
export async function WebsiteControllerCreate(params: Definitions.CreateWebsiteDto): Promise<{
  error: string;
  data: Paths.WebsiteControllerCreate.Responses;
}> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get all websites of an app
 */
export async function WebsiteControllerFindAll(
  params: Paths.WebsiteControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.WebsiteControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a website hosting of an app
 */
export async function WebsiteControllerFindOne(
  params: Paths.WebsiteControllerFindOne.BodyParameters,
): Promise<{
  error: string;
  data: Paths.WebsiteControllerFindOne.Responses;
}> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Bind custom domain to website
 */
export async function WebsiteControllerBindDomain(
  params: Definitions.BindCustomDomainDto,
): Promise<{
  error: string;
  data: Paths.WebsiteControllerBindDomain.Responses;
}> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a website hosting
 */
export async function WebsiteControllerRemove(
  params: Paths.WebsiteControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.WebsiteControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Check if domain is resolved
 */
export async function WebsiteControllerCheckResolved(
  params: Definitions.BindCustomDomainDto,
): Promise<{
  error: string;
  data: Paths.WebsiteControllerCheckResolved.Responses;
}> {
  // /v1/apps/{appid}/websites/{id}/resolved
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}/resolved`, {
    method: "POST",
    data: params,
  });
}

/**
 * Create a cron trigger
 */
export async function TriggerControllerCreate(params: Definitions.CreateTriggerDto): Promise<{
  error: string;
  data: Paths.TriggerControllerCreate.Responses;
}> {
  // /v1/apps/{appid}/triggers
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get trigger list of an application
 */
export async function TriggerControllerFindAll(
  params: Paths.TriggerControllerFindAll.BodyParameters,
): Promise<{
  error: string;
  data: Paths.TriggerControllerFindAll.Responses;
}> {
  // /v1/apps/{appid}/triggers
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers`, {
    method: "GET",
    params: params,
  });
}

/**
 * Remove a cron trigger
 */
export async function TriggerControllerRemove(
  params: Paths.TriggerControllerRemove.BodyParameters,
): Promise<{
  error: string;
  data: Paths.TriggerControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/triggers/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/triggers/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Get function logs
 */
export async function LogControllerGetLogs(
  params: Paths.LogControllerGetLogs.BodyParameters,
): Promise<{
  error: string;
  data: Paths.LogControllerGetLogs.Responses;
}> {
  // /v1/apps/{appid}/logs/functions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/logs/functions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Add application dependencies
 */
export async function DependencyControllerAdd(
  params: Paths.DependencyControllerAdd.BodyParameters,
): Promise<{
  error: string;
  data: Paths.DependencyControllerAdd.Responses;
}> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "POST",
    data: params,
  });
}

/**
 * Update application dependencies
 */
export async function DependencyControllerUpdate(
  params: Paths.DependencyControllerUpdate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.DependencyControllerUpdate.Responses;
}> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Get application dependencies
 */
export async function DependencyControllerGetDependencies(
  params: Paths.DependencyControllerGetDependencies.BodyParameters,
): Promise<{
  error: string;
  data: Paths.DependencyControllerGetDependencies.Responses;
}> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "GET",
    params: params,
  });
}

/**
 * Remove a dependency
 */
export async function DependencyControllerRemove(params: Definitions.DeleteDependencyDto): Promise<{
  error: string;
  data: Paths.DependencyControllerRemove.Responses;
}> {
  // /v1/apps/{appid}/dependencies
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/dependencies`, {
    method: "DELETE",
    data: params,
  });
}
