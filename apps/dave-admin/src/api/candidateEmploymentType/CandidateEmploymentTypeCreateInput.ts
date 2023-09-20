import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";

export type CandidateEmploymentTypeCreateInput = {
  candidate: CandidateWhereUniqueInput;
  organizationEmploymentType: OrganizationEmploymentTypeWhereUniqueInput;
};
