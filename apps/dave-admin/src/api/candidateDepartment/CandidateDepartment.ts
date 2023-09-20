import { OrganizationDepartment } from "../organizationDepartment/OrganizationDepartment";
import { Candidate } from "../candidate/Candidate";

export type CandidateDepartment = {
  organizationDepartment?: OrganizationDepartment;
  candidate?: Candidate;
  id: string;
};
