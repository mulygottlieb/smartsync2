import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateCriterionRatingUpdateManyWithoutCandidatePersonalQualitiesInput } from "./CandidateCriterionRatingUpdateManyWithoutCandidatePersonalQualitiesInput";

export type CandidatePersonalQualityUpdateInput = {
  name?: string;
  rating?: Decimal | null;
  tenant?: TenantWhereUniqueInput | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateCriterionRating?: CandidateCriterionRatingUpdateManyWithoutCandidatePersonalQualitiesInput;
};
