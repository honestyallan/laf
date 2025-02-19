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
 * Get current user profile
 */
export async function AuthControllerGetProfile(
  params: Paths.AuthControllerGetProfile.BodyParameters,
): Promise<{
  error: string;
  data: Definitions.UserWithProfile;
}> {
  // /v1/auth/profile
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/auth/profile`, {
    method: "GET",
    params: params,
  });
}
