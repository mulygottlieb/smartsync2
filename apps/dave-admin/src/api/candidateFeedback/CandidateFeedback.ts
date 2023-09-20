import { Decimal } from "decimal.js";
import { CandidateInterview } from "../candidateInterview/CandidateInterview";
import { Organization } from "../organization/Organization";
import { CandidateInterviewer } from "../candidateInterviewer/CandidateInterviewer";
import { Tenant } from "../tenant/Tenant";
import { Candidate } from "../candidate/Candidate";
import { CandidateCriterionRating } from "../candidateCriterionRating/CandidateCriterionRating";

export type CandidateFeedback = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  rating: Decimal | null;
  status?: "APPLIED" | "REJECTED" | "HIRED" | null;
  candidateInterview?: CandidateInterview | null;
  organization?: Organization | null;
  candidateInterviewer?: CandidateInterviewer | null;
  tenant?: Tenant | null;
  candidate?: Candidate | null;
  candidateCriterionRating?: Array<CandidateCriterionRating>;
};
