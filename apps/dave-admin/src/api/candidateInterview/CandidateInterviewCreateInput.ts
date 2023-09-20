import { Decimal } from "decimal.js";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateFeedbackCreateNestedManyWithoutCandidateInterviewsInput } from "./CandidateFeedbackCreateNestedManyWithoutCandidateInterviewsInput";
import { CandidateInterviewerCreateNestedManyWithoutCandidateInterviewsInput } from "./CandidateInterviewerCreateNestedManyWithoutCandidateInterviewsInput";
import { CandidatePersonalQualityCreateNestedManyWithoutCandidateInterviewsInput } from "./CandidatePersonalQualityCreateNestedManyWithoutCandidateInterviewsInput";
import { CandidateTechnologyCreateNestedManyWithoutCandidateInterviewsInput } from "./CandidateTechnologyCreateNestedManyWithoutCandidateInterviewsInput";

export type CandidateInterviewCreateInput = {
  title: string;
  startTime?: Date | null;
  endTime?: Date | null;
  location?: string | null;
  note?: string | null;
  isArchived?: boolean | null;
  rating?: Decimal | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
  candidateFeedback?: CandidateFeedbackCreateNestedManyWithoutCandidateInterviewsInput;
  candidateInterviewer?: CandidateInterviewerCreateNestedManyWithoutCandidateInterviewsInput;
  candidatePersonalQuality?: CandidatePersonalQualityCreateNestedManyWithoutCandidateInterviewsInput;
  candidateTechnology?: CandidateTechnologyCreateNestedManyWithoutCandidateInterviewsInput;
};
