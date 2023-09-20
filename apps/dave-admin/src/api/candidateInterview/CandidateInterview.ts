import { Decimal } from "decimal.js";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Candidate } from "../candidate/Candidate";
import { CandidateFeedback } from "../candidateFeedback/CandidateFeedback";
import { CandidateInterviewer } from "../candidateInterviewer/CandidateInterviewer";
import { CandidatePersonalQuality } from "../candidatePersonalQuality/CandidatePersonalQuality";
import { CandidateTechnology } from "../candidateTechnology/CandidateTechnology";

export type CandidateInterview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  startTime: Date | null;
  endTime: Date | null;
  location: string | null;
  note: string | null;
  isArchived: boolean | null;
  rating: Decimal | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  candidate?: Candidate | null;
  candidateFeedback?: Array<CandidateFeedback>;
  candidateInterviewer?: Array<CandidateInterviewer>;
  candidatePersonalQuality?: Array<CandidatePersonalQuality>;
  candidateTechnology?: Array<CandidateTechnology>;
};
