import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationPositionWhereUniqueInput } from "../organizationPosition/OrganizationPositionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CandidateSourceWhereUniqueInput } from "../candidateSource/CandidateSourceWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CandidateDepartmentListRelationFilter } from "../candidateDepartment/CandidateDepartmentListRelationFilter";
import { CandidateDocumentListRelationFilter } from "../candidateDocument/CandidateDocumentListRelationFilter";
import { CandidateEducationListRelationFilter } from "../candidateEducation/CandidateEducationListRelationFilter";
import { CandidateEmploymentTypeListRelationFilter } from "../candidateEmploymentType/CandidateEmploymentTypeListRelationFilter";
import { CandidateExperienceListRelationFilter } from "../candidateExperience/CandidateExperienceListRelationFilter";
import { CandidateFeedbackListRelationFilter } from "../candidateFeedback/CandidateFeedbackListRelationFilter";
import { CandidateInterviewListRelationFilter } from "../candidateInterview/CandidateInterviewListRelationFilter";
import { CandidateSkillListRelationFilter } from "../candidateSkill/CandidateSkillListRelationFilter";
import { TagCandidateListRelationFilter } from "../tagCandidate/TagCandidateListRelationFilter";

export type CandidateWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  rating?: DecimalNullableFilter;
  valueDate?: DateTimeNullableFilter;
  appliedDate?: DateTimeNullableFilter;
  hiredDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  rejectDate?: DateTimeNullableFilter;
  candidateLevel?: StringNullableFilter;
  reWeeklyLimit?: IntNullableFilter;
  billRateCurrency?: StringNullableFilter;
  billRateValue?: IntNullableFilter;
  payPeriod?: StringNullableFilter;
  cvUrl?: StringNullableFilter;
  isArchived?: BooleanNullableFilter;
  minimumBillingRate?: IntNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  organizationPosition?: OrganizationPositionWhereUniqueInput;
  user?: UserWhereUniqueInput;
  candidateSource?: CandidateSourceWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  contact?: ContactWhereUniqueInput;
  candidateDepartment?: CandidateDepartmentListRelationFilter;
  candidateDocument?: CandidateDocumentListRelationFilter;
  candidateEducation?: CandidateEducationListRelationFilter;
  candidateEmploymentType?: CandidateEmploymentTypeListRelationFilter;
  candidateExperience?: CandidateExperienceListRelationFilter;
  candidateFeedback?: CandidateFeedbackListRelationFilter;
  candidateInterview?: CandidateInterviewListRelationFilter;
  candidateSkill?: CandidateSkillListRelationFilter;
  tagCandidate?: TagCandidateListRelationFilter;
};
