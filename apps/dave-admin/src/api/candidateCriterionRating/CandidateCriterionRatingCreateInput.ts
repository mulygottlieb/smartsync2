import { CandidateFeedbackWhereUniqueInput } from "../candidateFeedback/CandidateFeedbackWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidatePersonalQualityWhereUniqueInput } from "../candidatePersonalQuality/CandidatePersonalQualityWhereUniqueInput";
import { CandidateTechnologyWhereUniqueInput } from "../candidateTechnology/CandidateTechnologyWhereUniqueInput";

export type CandidateCriterionRatingCreateInput = {
  rating: number;
  candidateFeedback?: CandidateFeedbackWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidatePersonalQuality?: CandidatePersonalQualityWhereUniqueInput | null;
  candidateTechnology?: CandidateTechnologyWhereUniqueInput | null;
};
