import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportHistoryUpdateInput = {
  file?: string;
  path?: string;
  size?: number | null;
  status?: string;
  tenant?: TenantWhereUniqueInput | null;
};
