import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { CandidateInterviewWhereUniqueInput } from "../candidateInterview/CandidateInterviewWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateFeedbackWhereUniqueInput } from "../candidateFeedback/CandidateFeedbackWhereUniqueInput";

export type CandidateInterviewerUpdateInput = {
  organization?: OrganizationWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  candidateInterview?: CandidateInterviewWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  candidateFeedback?: CandidateFeedbackWhereUniqueInput | null;
};
