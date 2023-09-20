import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateCriterionRatingListRelationFilter } from "../candidateCriterionRating/CandidateCriterionRatingListRelationFilter";

export type CandidatePersonalQualityWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  rating?: DecimalNullableFilter;
  tenant?: TenantWhereUniqueInput;
  candidateInterview?: CandidateInterviewWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  candidateCriterionRating?: CandidateCriterionRatingListRelationFilter;
};
