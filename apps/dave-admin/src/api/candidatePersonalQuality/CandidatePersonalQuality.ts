import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { CandidateInterview } from "../candidateInterview/CandidateInterview";
import { Organization } from "../organization/Organization";
import { CandidateCriterionRating } from "../candidateCriterionRating/CandidateCriterionRating";

export type CandidatePersonalQuality = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  rating: Decimal | null;
  tenant?: Tenant | null;
  candidateInterview?: CandidateInterview | null;
  organization?: Organization | null;
  candidateCriterionRating?: Array<CandidateCriterionRating>;
};
