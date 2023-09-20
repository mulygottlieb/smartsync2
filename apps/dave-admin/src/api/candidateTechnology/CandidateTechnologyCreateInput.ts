import { Decimal } from "decimal.js";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateCriterionRatingCreateNestedManyWithoutCandidateTechnologiesInput } from "./CandidateCriterionRatingCreateNestedManyWithoutCandidateTechnologiesInput";

export type CandidateTechnologyCreateInput = {
  name: string;
  rating?: Decimal | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidateCriterionRating?: CandidateCriterionRatingCreateNestedManyWithoutCandidateTechnologiesInput;
};
