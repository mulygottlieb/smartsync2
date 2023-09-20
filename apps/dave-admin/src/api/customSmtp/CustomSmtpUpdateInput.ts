import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CustomSmtpUpdateInput = {
  host?: string;
  port?: number;
  secure?: boolean;
  username?: string;
  password?: string;
  isValidate?: boolean;
  fromAddress?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
