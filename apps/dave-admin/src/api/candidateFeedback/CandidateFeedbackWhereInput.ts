import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateInterviewerWhereUniqueInput } from "../candidateInterviewer/CandidateInterviewerWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateCriterionRatingListRelationFilter } from "../candidateCriterionRating/CandidateCriterionRatingListRelationFilter";

export type CandidateFeedbackWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  description?: StringNullableFilter;
  rating?: DecimalNullableFilter;
  status?: "APPLIED" | "REJECTED" | "HIRED";
  candidateInterview?: CandidateInterviewWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  candidateInterviewer?: CandidateInterviewerWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  candidate?: CandidateWhereUniqueInput;
  candidateCriterionRating?: CandidateCriterionRatingListRelationFilter;
};
