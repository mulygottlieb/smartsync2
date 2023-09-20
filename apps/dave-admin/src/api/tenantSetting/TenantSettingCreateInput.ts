import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TenantSettingCreateInput = {
  name: string;
  value?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
