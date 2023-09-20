import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type CandidateExperienceUpdateInput = {
  occupation?: string;
  duration?: string;
  description?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
};
