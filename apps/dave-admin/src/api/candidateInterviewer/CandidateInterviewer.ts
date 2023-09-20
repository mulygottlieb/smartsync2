import { Organization } from "../organization/Organization";
import { Employee } from "../employee/Employee";
import { CandidateInterview } from "../candidateInterview/CandidateInterview";
import { Tenant } from "../tenant/Tenant";
import { CandidateFeedback } from "../candidateFeedback/CandidateFeedback";

export type CandidateInterviewer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  organization?: Organization | null;
  employee?: Employee | null;
  candidateInterview?: CandidateInterview;
  tenant?: Tenant | null;
  candidateFeedback?: CandidateFeedback | null;
};
