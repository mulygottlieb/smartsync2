import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportHistoryCreateInput = {
  file: string;
  path: string;
  size?: number | null;
  status: string;
  tenant?: TenantWhereUniqueInput | null;
};
