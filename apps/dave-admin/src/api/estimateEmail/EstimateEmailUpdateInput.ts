import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EstimateEmailUpdateInput = {
  token?: string;
  email?: string;
  expireDate?: Date;
  convertAcceptedEstimates?: boolean | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
