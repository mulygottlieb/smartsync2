import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CandidateEducationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  schoolName?: StringFilter;
  degree?: StringFilter;
  field?: StringFilter;
  completionDate?: DateTimeFilter;
  notes?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  candidate?: CandidateWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
