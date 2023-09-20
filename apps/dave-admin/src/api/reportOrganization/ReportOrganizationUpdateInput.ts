import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ReportOrganizationUpdateInput = {
  isEnabled?: boolean;
  organization?: OrganizationWhereUniqueInput | null;
  report?: ReportWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
