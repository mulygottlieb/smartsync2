import { Decimal } from "decimal.js";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateFeedbackUpdateManyWithoutCandidateInterviewsInput } from "./CandidateFeedbackUpdateManyWithoutCandidateInterviewsInput";
import { CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput } from "./CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput";
import { CandidatePersonalQualityUpdateManyWithoutCandidateInterviewsInput } from "./CandidatePersonalQualityUpdateManyWithoutCandidateInterviewsInput";
import { CandidateTechnologyUpdateManyWithoutCandidateInterviewsInput } from "./CandidateTechnologyUpdateManyWithoutCandidateInterviewsInput";

export type CandidateInterviewUpdateInput = {
  title?: string;
  startTime?: Date | null;
  endTime?: Date | null;
  location?: string | null;
  note?: string | null;
  isArchived?: boolean | null;
  rating?: Decimal | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
  candidateFeedback?: CandidateFeedbackUpdateManyWithoutCandidateInterviewsInput;
  candidateInterviewer?: CandidateInterviewerUpdateManyWithoutCandidateInterviewsInput;
  candidatePersonalQuality?: CandidatePersonalQualityUpdateManyWithoutCandidateInterviewsInput;
  candidateTechnology?: CandidateTechnologyUpdateManyWithoutCandidateInterviewsInput;
};
