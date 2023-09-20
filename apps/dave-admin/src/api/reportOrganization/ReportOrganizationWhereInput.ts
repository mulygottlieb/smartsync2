import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ReportOrganizationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  isEnabled?: BooleanFilter;
  organization?: OrganizationWhereUniqueInput;
  report?: ReportWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
