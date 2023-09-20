import { Decimal } from "decimal.js";
import { CandidateInterview } from "../candidateInterview/CandidateInterview";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { CandidateCriterionRating } from "../candidateCriterionRating/CandidateCriterionRating";

export type CandidateTechnology = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  rating: Decimal | null;
  candidateInterview?: CandidateInterview | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  candidateCriterionRating?: Array<CandidateCriterionRating>;
};
