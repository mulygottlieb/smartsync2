import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateFeedbackWhereUniqueInput } from "../candidateFeedback/CandidateFeedbackWhereUniqueInput";

export type CandidateInterviewerWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  organization?: OrganizationWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  candidateInterview?: CandidateInterviewWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  candidateFeedback?: CandidateFeedbackWhereUniqueInput;
};
