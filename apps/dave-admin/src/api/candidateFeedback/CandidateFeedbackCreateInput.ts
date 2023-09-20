import { Decimal } from "decimal.js";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateInterviewerWhereUniqueInput } from "../candidateInterviewer/CandidateInterviewerWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateCriterionRatingCreateNestedManyWithoutCandidateFeedbacksInput } from "./CandidateCriterionRatingCreateNestedManyWithoutCandidateFeedbacksInput";

export type CandidateFeedbackCreateInput = {
  description?: string | null;
  rating?: Decimal | null;
  status?: "APPLIED" | "REJECTED" | "HIRED" | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  candidateInterviewer?: CandidateInterviewerWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
  candidateCriterionRating?: CandidateCriterionRatingCreateNestedManyWithoutCandidateFeedbacksInput;
};