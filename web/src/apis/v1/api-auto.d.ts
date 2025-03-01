declare namespace Definitions {
  export type CreateFunctionDto = {
    name?: string /* Function name is unique in the application */;
    description?: string;
    methods?: string[];
    code?: string /* The source code of the function */;
    tags?: string[];
  };

  export type UpdateFunctionDto = {
    description?: string;
    methods?: string[];
    code?: string /* The source code of the function */;
    tags?: string[];
    params?: {};
  };

  export type CompileFunctionDto = {
    code?: string /* The source code of the function */;
  };

  export type CreateApplicationDto = {
    cpu?: number;
    memory?: number;
    databaseCapacity?: number;
    storageCapacity?: number;
    name?: string;
    state?: string;
    regionId?: string;
    runtimeId?: string;
  };

  export type ApplicationWithRelations = {
    _id?: string;
    name?: string;
    appid?: string;
    regionId?: string;
    runtimeId?: string;
    tags?: string[];
    state?: string;
    phase?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    region?: Definitions.Region;
    bundle?: Definitions.ApplicationBundle;
    runtime?: Definitions.Runtime;
    configuration?: Definitions.ApplicationConfiguration;
    domain?: Definitions.RuntimeDomain;
  };

  export type Application = {
    _id?: string;
    name?: string;
    appid?: string;
    regionId?: string;
    runtimeId?: string;
    tags?: string[];
    state?: string;
    phase?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
  };

  export type UpdateApplicationNameDto = {
    name?: string;
  };

  export type UpdateApplicationStateDto = {
    state?: string;
  };

  export type UpdateApplicationBundleDto = {
    cpu?: number;
    memory?: number;
    databaseCapacity?: number;
    storageCapacity?: number;
  };

  export type ApplicationBundle = {
    _id?: string;
    appid?: string;
    resource?: Definitions.ApplicationBundleResource;
    isTrialTier?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };

  export type CreateEnvironmentDto = {
    name?: string;
    value?: string;
  };

  export type CreateBucketDto = {
    shortName?: string /* The short name of the bucket which not contain the appid */;
    policy?: string;
  };

  export type UpdateBucketDto = {
    policy?: string;
  };

  export type CreateCollectionDto = {
    name?: string;
  };

  export type Collection = {
    name?: string;
    type?: string;
    options?: {};
    info?: {};
    idIndex?: {};
  };

  export type UpdateCollectionDto = {
    validatorSchema?: {};
    validationLevel?: string;
  };

  export type CreatePolicyDto = {
    name?: string;
  };

  export type DatabasePolicyWithRules = {
    _id?: string;
    appid?: string;
    name?: string;
    injector?: string;
    createdAt?: string;
    updatedAt?: string;
    rules?: Definitions.DatabasePolicyRule[];
  };

  export type UpdatePolicyDto = {
    injector?: string;
  };

  export type DatabasePolicy = {
    _id?: string;
    appid?: string;
    name?: string;
    injector?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  export type CreatePolicyRuleDto = {
    collectionName?: string;
    value?: string;
  };

  export type DatabasePolicyRule = {
    _id?: string;
    appid?: string;
    policyName?: string;
    collectionName?: string;
    value?: {};
    createdAt?: string;
    updatedAt?: string;
  };

  export type UpdatePolicyRuleDto = {
    value?: string;
  };

  export type Account = {
    _id?: string;
    balance?: number;
    state?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
  };

  export type AccountChargeOrder = {
    _id?: string;
    accountId?: string;
    amount?: number;
    currency?: string;
    phase?: string;
    channel?: string;
    result?: {};
    message?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
  };

  export type CreateChargeOrderDto = {
    amount?: number;
    channel?: string;
    currency?: string;
  };

  export type CreateChargeOrderOutDto = {
    order?: Definitions.AccountChargeOrder;
    result?: Definitions.WeChatPaymentCreateOrderResult;
  };

  export type CreateWebsiteDto = {
    bucketName?: string;
    state?: string;
  };

  export type BindCustomDomainDto = {
    domain?: string;
  };

  export type Pat2TokenDto = {
    pat?: string /* PAT */;
  };

  export type UserWithProfile = {
    _id?: string;
    username?: string;
    email?: string;
    phone?: string;
    createdAt?: string;
    updatedAt?: string;
    profile?: Definitions.UserProfile;
  };

  export type PasswdSignupDto = {
    username?: string /* username, 3-64 characters */;
    password?: string /* password, 8-64 characters */;
    phone?: string /* phone */;
    code?: string /* verify code */;
    type?: string /* type */;
    inviteCode?: string /* invite code */;
  };

  export type PasswdSigninDto = {
    username?: string /* username */;
    password?: string /* password, 8-64 characters */;
  };

  export type PasswdResetDto = {
    password?: string /* new password, 8-64 characters */;
    phone?: string /* phone */;
    code?: string /* verify code */;
    type?: string /* type */;
  };

  export type PasswdCheckDto = {
    username?: string /* username | phone | email */;
  };

  export type SendPhoneCodeDto = {
    phone?: string /* phone */;
    type?: string /* verify code type */;
  };

  export type PhoneSigninDto = {
    phone?: string /* phone */;
    code?: string;
    username?: string /* username */;
    password?: string /* password, 8-64 characters */;
    inviteCode?: string /* invite code */;
  };

  export type BindPhoneDto = {
    phone?: string /* phone number */;
    code?: string /* sms verify code */;
  };

  export type BindUsernameDto = {
    username?: string /* username */;
    phone?: string /* phone */;
    code?: string /* sms verify code */;
  };

  export type CreatePATDto = {
    name?: string;
    expiresIn?: number;
  };

  export type CreateTriggerDto = {
    desc?: string;
    cron?: string;
    target?: string;
  };

  export type DeleteDependencyDto = {
    name?: string;
  };

  export type ApplicationBilling = {
    _id?: string;
    appid?: string;
    state?: string;
    amount?: number;
    detail?: Definitions.ApplicationBillingDetail;
    startAt?: string;
    endAt?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  export type CalculatePriceDto = {
    cpu?: number;
    memory?: number;
    databaseCapacity?: number;
    storageCapacity?: number;
    regionId?: string;
  };

  export type CalculatePriceResultDto = {
    cpu?: number;
    memory?: number;
    storageCapacity?: number;
    databaseCapacity?: number;
    total?: number;
  };

  export type Region = {
    _id?: string;
    name?: string;
    displayName?: string;
    tls?: boolean;
    state?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  export type ApplicationBundleResource = {
    limitCPU?: number;
    limitMemory?: number;
    databaseCapacity?: number;
    storageCapacity?: number;
    limitCountOfCloudFunction?: number;
    limitCountOfBucket?: number;
    limitCountOfDatabasePolicy?: number;
    limitCountOfTrigger?: number;
    limitCountOfWebsiteHosting?: number;
    reservedTimeAfterExpired?: number;
  };

  export type Runtime = {
    _id?: string;
    name?: string;
    type?: string;
    image?: Definitions.RuntimeImageGroup;
    state?: string;
    version?: string;
    latest?: boolean;
  };

  export type RuntimeImageGroup = {
    main?: string;
    init?: string;
    sidecar?: string;
  };

  export type ApplicationConfiguration = {
    _id?: string;
    appid?: string;
    environments?: Definitions.EnvironmentVariable[];
    dependencies?: string[];
    createdAt?: string;
    updatedAt?: string;
  };

  export type EnvironmentVariable = {
    name?: string;
    value?: string;
  };

  export type RuntimeDomain = {
    _id?: string;
    appid?: string;
    domain?: string;
    state?: string;
    phase?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  export type WeChatPaymentCreateOrderResult = {
    code_url?: string;
  };

  export type UserProfile = {
    _id?: string;
    uid?: string;
    openData?: {};
    avatar?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  export type ApplicationBillingDetail = {
    cpu?: Definitions.ApplicationBillingDetailItem;
    memory?: Definitions.ApplicationBillingDetailItem;
    databaseCapacity?: Definitions.ApplicationBillingDetailItem;
    storageCapacity?: Definitions.ApplicationBillingDetailItem;
    networkTraffic?: Definitions.ApplicationBillingDetailItem;
  };

  export type ApplicationBillingDetailItem = {
    usage?: number;
    amount?: number;
  };
}

declare namespace Paths {
  namespace AppControllerGetRuntimes {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace FunctionControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateFunctionDto;

    export type Responses = any;
  }

  namespace FunctionControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace FunctionControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace FunctionControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateFunctionDto;

    export type Responses = any;
  }

  namespace FunctionControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace FunctionControllerCompile {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CompileFunctionDto;

    export type Responses = any;
  }

  namespace ApplicationControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateApplicationDto;

    export type Responses = any;
  }

  namespace ApplicationControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ApplicationControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ApplicationControllerDelete {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ApplicationControllerUpdateName {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateApplicationNameDto;

    export type Responses = any;
  }

  namespace ApplicationControllerUpdateState {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateApplicationStateDto;

    export type Responses = any;
  }

  namespace ApplicationControllerUpdateBundle {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateApplicationBundleDto;

    export type Responses = any;
  }

  namespace EnvironmentVariableControllerUpdateAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace EnvironmentVariableControllerAdd {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateEnvironmentDto;

    export type Responses = any;
  }

  namespace EnvironmentVariableControllerGet {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace EnvironmentVariableControllerDelete {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace BucketControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateBucketDto;

    export type Responses = any;
  }

  namespace BucketControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace BucketControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace BucketControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateBucketDto;

    export type Responses = any;
  }

  namespace BucketControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace CollectionControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateCollectionDto;

    export type Responses = any;
  }

  namespace CollectionControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace CollectionControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace CollectionControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdateCollectionDto;

    export type Responses = any;
  }

  namespace CollectionControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace PolicyControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreatePolicyDto;

    export type Responses = any;
  }

  namespace PolicyControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace PolicyControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdatePolicyDto;

    export type Responses = any;
  }

  namespace PolicyControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace DatabaseControllerProxy {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace PolicyRuleControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreatePolicyRuleDto;

    export type Responses = any;
  }

  namespace PolicyRuleControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace PolicyRuleControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.UpdatePolicyRuleDto;

    export type Responses = any;
  }

  namespace PolicyRuleControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace AccountControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace AccountControllerGetChargeOrder {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace AccountControllerCharge {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateChargeOrderDto;

    export type Responses = any;
  }

  namespace AccountControllerWechatNotify {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace WebsiteControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateWebsiteDto;

    export type Responses = any;
  }

  namespace WebsiteControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace WebsiteControllerFindOne {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace WebsiteControllerBindDomain {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.BindCustomDomainDto;

    export type Responses = any;
  }

  namespace WebsiteControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace WebsiteControllerCheckResolved {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.BindCustomDomainDto;

    export type Responses = any;
  }

  namespace AuthControllerPat2token {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.Pat2TokenDto;

    export type Responses = any;
  }

  namespace AuthControllerGetProfile {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace UserPasswordControllerSignup {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.PasswdSignupDto;

    export type Responses = any;
  }

  namespace UserPasswordControllerSignin {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.PasswdSigninDto;

    export type Responses = any;
  }

  namespace UserPasswordControllerReset {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.PasswdResetDto;

    export type Responses = any;
  }

  namespace UserPasswordControllerCheck {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.PasswdCheckDto;

    export type Responses = any;
  }

  namespace PhoneControllerSendCode {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.SendPhoneCodeDto;

    export type Responses = any;
  }

  namespace PhoneControllerSignin {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.PhoneSigninDto;

    export type Responses = any;
  }

  namespace AuthenticationControllerGetProviders {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace AuthenticationControllerBindPhone {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.BindPhoneDto;

    export type Responses = any;
  }

  namespace AuthenticationControllerBindUsername {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.BindUsernameDto;

    export type Responses = any;
  }

  namespace PatControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreatePATDto;

    export type Responses = any;
  }

  namespace PatControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace PatControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace TriggerControllerCreate {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CreateTriggerDto;

    export type Responses = any;
  }

  namespace TriggerControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace TriggerControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace LogControllerGetLogs {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace DependencyControllerAdd {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace DependencyControllerUpdate {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace DependencyControllerGetDependencies {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace DependencyControllerRemove {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.DeleteDependencyDto;

    export type Responses = any;
  }

  namespace RegionControllerGetRegions {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace SettingControllerGetSettings {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace SettingControllerGetSettingByKey {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace BillingControllerFindAll {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ResourceControllerCalculatePrice {
    export type QueryParameters = any;

    export type BodyParameters = Definitions.CalculatePriceDto;

    export type Responses = any;
  }

  namespace ResourceControllerGetResourceOptions {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ResourceControllerGetResourceOptionsByRegionId {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }

  namespace ResourceControllerGetResourceBundles {
    export type QueryParameters = any;

    export type BodyParameters = any;

    export type Responses = any;
  }
}
