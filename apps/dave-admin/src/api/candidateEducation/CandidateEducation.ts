import { Tenant } from "../tenant/Tenant";
import { Candidate } from "../candidate/Candidate";
import { Organization } from "../organization/Organization";

export type CandidateEducation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  schoolName: string;
  degree: string;
  field: string;
  completionDate: Date;
  notes: string | null;
  tenant?: Tenant | null;
  candidate?: Candidate | null;
  organization?: Organization | null;
};
