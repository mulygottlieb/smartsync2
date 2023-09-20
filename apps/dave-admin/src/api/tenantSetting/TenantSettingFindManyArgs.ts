import { TenantSettingWhereInput } from "./TenantSettingWhereInput";
import { TenantSettingOrderByInput } from "./TenantSettingOrderByInput";

export type TenantSettingFindManyArgs = {
  where?: TenantSettingWhereInput;
  orderBy?: Array<TenantSettingOrderByInput>;
  skip?: number;
  take?: number;
};
