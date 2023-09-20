import { CandidateFeedback } from "../candidateFeedback/CandidateFeedback";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { CandidatePersonalQuality } from "../candidatePersonalQuality/CandidatePersonalQuality";
import { CandidateTechnology } from "../candidateTechnology/CandidateTechnology";

export type CandidateCriterionRating = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
  candidateFeedback?: CandidateFeedback | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  candidatePersonalQuality?: CandidatePersonalQuality | null;
  candidateTechnology?: CandidateTechnology | null;
};
