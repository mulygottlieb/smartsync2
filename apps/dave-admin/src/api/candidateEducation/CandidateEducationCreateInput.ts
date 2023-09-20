import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CandidateEducationCreateInput = {
  schoolName: string;
  degree: string;
  field: string;
  completionDate: Date;
  notes?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
