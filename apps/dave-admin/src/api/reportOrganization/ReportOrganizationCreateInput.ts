import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ReportOrganizationCreateInput = {
  isEnabled: boolean;
  organization?: OrganizationWhereUniqueInput | null;
  report: ReportWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
