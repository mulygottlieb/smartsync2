import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CandidateEmploymentTypeWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;
  id?: StringFilter;
};
