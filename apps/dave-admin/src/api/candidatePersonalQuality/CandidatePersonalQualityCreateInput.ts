import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput } from "./CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput";

export type CandidatePersonalQualityCreateInput = {
  name: string;
  rating?: Decimal | null;
  tenant?: TenantWhereUniqueInput | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateCriterionRating?: CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput;
};
