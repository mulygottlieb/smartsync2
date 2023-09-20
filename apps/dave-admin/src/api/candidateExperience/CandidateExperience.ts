import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Candidate } from "../candidate/Candidate";

export type CandidateExperience = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  occupation: string;
  duration: string;
  description: string | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  candidate?: Candidate | null;
};
