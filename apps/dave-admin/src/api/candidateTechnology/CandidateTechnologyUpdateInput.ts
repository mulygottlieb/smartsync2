import { Decimal } from "decimal.js";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateCriterionRatingUpdateManyWithoutCandidateTechnologiesInput } from "./CandidateCriterionRatingUpdateManyWithoutCandidateTechnologiesInput";

export type CandidateTechnologyUpdateInput = {
  name?: string;
  rating?: Decimal | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidateCriterionRating?: CandidateCriterionRatingUpdateManyWithoutCandidateTechnologiesInput;
};
