import { Candidate } from "../candidate/Candidate";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type CandidateSkill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  candidate?: Candidate | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
