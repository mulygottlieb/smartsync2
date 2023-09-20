import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";

export type CandidateEmploymentTypeUpdateInput = {
  candidate?: CandidateWhereUniqueInput;
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;
};
