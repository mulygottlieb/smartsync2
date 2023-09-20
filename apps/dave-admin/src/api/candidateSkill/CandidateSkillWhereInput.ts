import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CandidateSkillWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  candidate?: CandidateWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
