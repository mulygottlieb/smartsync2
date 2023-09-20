import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TenantSettingUpdateInput = {
  name?: string;
  value?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
