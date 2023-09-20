import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Candidate } from "../candidate/Candidate";

export type CandidateSource = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  candidate?: Candidate | null;
};
