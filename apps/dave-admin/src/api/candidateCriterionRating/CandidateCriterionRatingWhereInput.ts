import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { CandidateFeedbackWhereUniqueInput } from "../candidateFeedback/CandidateFeedbackWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidatePersonalQualityWhereUniqueInput } from "../candidatePersonalQuality/CandidatePersonalQualityWhereUniqueInput";
import { CandidateTechnologyWhereUniqueInput } from "../candidateTechnology/CandidateTechnologyWhereUniqueInput";

export type CandidateCriterionRatingWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  rating?: IntFilter;
  candidateFeedback?: CandidateFeedbackWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  candidatePersonalQuality?: CandidatePersonalQualityWhereUniqueInput;
  candidateTechnology?: CandidateTechnologyWhereUniqueInput;
};
