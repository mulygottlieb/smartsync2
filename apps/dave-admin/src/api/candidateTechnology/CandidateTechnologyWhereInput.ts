import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateCriterionRatingListRelationFilter } from "../candidateCriterionRating/CandidateCriterionRatingListRelationFilter";

export type CandidateTechnologyWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  rating?: DecimalNullableFilter;
  candidateInterview?: CandidateInterviewWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  candidateCriterionRating?: CandidateCriterionRatingListRelationFilter;
};
