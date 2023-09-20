import { Candidate } from "../candidate/Candidate";
import { OrganizationEmploymentType } from "../organizationEmploymentType/OrganizationEmploymentType";

export type CandidateEmploymentType = {
  candidate?: Candidate;
  organizationEmploymentType?: OrganizationEmploymentType;
  id: string;
};
