import { EmployeeUpworkJobSearchCriterionUpdateManyWithoutEmployeesInput } from "./EmployeeUpworkJobSearchCriterionUpdateManyWithoutEmployeesInput";
import { EquipmentSharesEmployeeUpdateManyWithoutEmployeesInput } from "./EquipmentSharesEmployeeUpdateManyWithoutEmployeesInput";
import { EventTypeUpdateManyWithoutEmployeesInput } from "./EventTypeUpdateManyWithoutEmployeesInput";
import { ExpenseUpdateManyWithoutEmployeesInput } from "./ExpenseUpdateManyWithoutEmployeesInput";
import { GoalUpdateManyWithoutEmployeesInput } from "./GoalUpdateManyWithoutEmployeesInput";
import { GoalKpiUpdateManyWithoutEmployeesInput } from "./GoalKpiUpdateManyWithoutEmployeesInput";
import { GoalKpiTemplateUpdateManyWithoutEmployeesInput } from "./GoalKpiTemplateUpdateManyWithoutEmployeesInput";
import { IncomeUpdateManyWithoutEmployeesInput } from "./IncomeUpdateManyWithoutEmployeesInput";
import { InvoiceItemUpdateManyWithoutEmployeesInput } from "./InvoiceItemUpdateManyWithoutEmployeesInput";
import { Decimal } from "decimal.js";
import { KeyResultUpdateManyWithoutEmployeesInput } from "./KeyResultUpdateManyWithoutEmployeesInput";
import { KnowledgeBaseAuthorUpdateManyWithoutEmployeesInput } from "./KnowledgeBaseAuthorUpdateManyWithoutEmployeesInput";
import { ActivityUpdateManyWithoutEmployeesInput } from "./ActivityUpdateManyWithoutEmployeesInput";
import { AppointmentEmployeeUpdateManyWithoutEmployeesInput } from "./AppointmentEmployeeUpdateManyWithoutEmployeesInput";
import { AvailabilitySlotUpdateManyWithoutEmployeesInput } from "./AvailabilitySlotUpdateManyWithoutEmployeesInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { CandidateInterviewerUpdateManyWithoutEmployeesInput } from "./CandidateInterviewerUpdateManyWithoutEmployeesInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { EmployeeAppointmentUpdateManyWithoutEmployeesInput } from "./EmployeeAppointmentUpdateManyWithoutEmployeesInput";
import { EmployeeAwardUpdateManyWithoutEmployeesInput } from "./EmployeeAwardUpdateManyWithoutEmployeesInput";
import { EmployeeJobPresetUpdateManyWithoutEmployeesInput } from "./EmployeeJobPresetUpdateManyWithoutEmployeesInput";
import { EmployeePhoneUpdateManyWithoutEmployeesInput } from "./EmployeePhoneUpdateManyWithoutEmployeesInput";
import { EmployeeProposalTemplateUpdateManyWithoutEmployeesInput } from "./EmployeeProposalTemplateUpdateManyWithoutEmployeesInput";
import { EmployeeRecurringExpenseUpdateManyWithoutEmployeesInput } from "./EmployeeRecurringExpenseUpdateManyWithoutEmployeesInput";
import { EmployeeSettingUpdateManyWithoutEmployeesInput } from "./EmployeeSettingUpdateManyWithoutEmployeesInput";
import { EmployeeTasksTaskUpdateManyWithoutEmployeesInput } from "./EmployeeTasksTaskUpdateManyWithoutEmployeesInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationContactEmployeeUpdateManyWithoutEmployeesInput } from "./OrganizationContactEmployeeUpdateManyWithoutEmployeesInput";
import { OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput } from "./OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput";
import { OrganizationEmploymentTypeEmployeeUpdateManyWithoutEmployeesInput } from "./OrganizationEmploymentTypeEmployeeUpdateManyWithoutEmployeesInput";
import { OrganizationPositionWhereUniqueInput } from "../organizationPosition/OrganizationPositionWhereUniqueInput";
import { OrganizationProjectEmployeeUpdateManyWithoutEmployeesInput } from "./OrganizationProjectEmployeeUpdateManyWithoutEmployeesInput";
import { OrganizationTeamEmployeeUpdateManyWithoutEmployeesInput } from "./OrganizationTeamEmployeeUpdateManyWithoutEmployeesInput";
import { PaymentUpdateManyWithoutEmployeesInput } from "./PaymentUpdateManyWithoutEmployeesInput";
import { ProposalUpdateManyWithoutEmployeesInput } from "./ProposalUpdateManyWithoutEmployeesInput";
import { RequestApprovalEmployeeUpdateManyWithoutEmployeesInput } from "./RequestApprovalEmployeeUpdateManyWithoutEmployeesInput";
import { SkillEmployeeUpdateManyWithoutEmployeesInput } from "./SkillEmployeeUpdateManyWithoutEmployeesInput";
import { TagEmployeeUpdateManyWithoutEmployeesInput } from "./TagEmployeeUpdateManyWithoutEmployeesInput";
import { TaskEmployeeUpdateManyWithoutEmployeesInput } from "./TaskEmployeeUpdateManyWithoutEmployeesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TimeLogUpdateManyWithoutEmployeesInput } from "./TimeLogUpdateManyWithoutEmployeesInput";
import { TimeOffPolicyEmployeeUpdateManyWithoutEmployeesInput } from "./TimeOffPolicyEmployeeUpdateManyWithoutEmployeesInput";
import { TimeOffRequestEmployeeUpdateManyWithoutEmployeesInput } from "./TimeOffRequestEmployeeUpdateManyWithoutEmployeesInput";
import { TimesheetUpdateManyWithoutEmployeesInput } from "./TimesheetUpdateManyWithoutEmployeesInput";
import { TimeSlotUpdateManyWithoutEmployeesInput } from "./TimeSlotUpdateManyWithoutEmployeesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeUpdateInput = {
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionUpdateManyWithoutEmployeesInput;
  endWork?: Date | null;
  equipmentSharesEmployees?: EquipmentSharesEmployeeUpdateManyWithoutEmployeesInput;
  eventType?: EventTypeUpdateManyWithoutEmployeesInput;
  expense?: ExpenseUpdateManyWithoutEmployeesInput;
  facebookUrl?: string | null;
  githubUrl?: string | null;
  gitlabUrl?: string | null;
  goalGoalLeadIdToemployee?: GoalUpdateManyWithoutEmployeesInput;
  goalGoalOwnerEmployeeIdToemployee?: GoalUpdateManyWithoutEmployeesInput;
  goalKpi?: GoalKpiUpdateManyWithoutEmployeesInput;
  goalKpiTemplate?: GoalKpiTemplateUpdateManyWithoutEmployeesInput;
  income?: IncomeUpdateManyWithoutEmployeesInput;
  instagramUrl?: string | null;
  invoiceItem?: InvoiceItemUpdateManyWithoutEmployeesInput;
  isActive?: boolean | null;
  isAway?: boolean | null;
  isJobSearchActive?: boolean | null;
  isOnline?: boolean | null;
  isTrackingEnabled?: boolean | null;
  isTrackingTime?: boolean | null;
  isVerified?: boolean | null;
  isVetted?: boolean | null;
  jobSuccess?: Decimal | null;
  keyResultKeyResultLeadIdToemployee?: KeyResultUpdateManyWithoutEmployeesInput;
  keyResultKeyResultOwnerIdToemployee?: KeyResultUpdateManyWithoutEmployeesInput;
  knowledgeBaseAuthor?: KnowledgeBaseAuthorUpdateManyWithoutEmployeesInput;
  acceptDate?: Date | null;
  activity?: ActivityUpdateManyWithoutEmployeesInput;
  allowScreenshotCapture?: boolean;
  anonymousBonus?: boolean | null;
  appointmentEmployee?: AppointmentEmployeeUpdateManyWithoutEmployeesInput;
  availabilitySlot?: AvailabilitySlotUpdateManyWithoutEmployeesInput;
  averageBonus?: Decimal | null;
  averageExpenses?: Decimal | null;
  averageIncome?: Decimal | null;
  billRateCurrency?: string | null;
  billRateValue?: number | null;
  candidate?: CandidateWhereUniqueInput | null;
  candidateInterviewer?: CandidateInterviewerUpdateManyWithoutEmployeesInput;
  contact?: ContactWhereUniqueInput | null;
  deletedAt?: Date | null;
  description?: string | null;
  employeeAppointment?: EmployeeAppointmentUpdateManyWithoutEmployeesInput;
  employeeAward?: EmployeeAwardUpdateManyWithoutEmployeesInput;
  employeeJobPreset?: EmployeeJobPresetUpdateManyWithoutEmployeesInput;
  employeeLevel?: string | null;
  employeePhone?: EmployeePhoneUpdateManyWithoutEmployeesInput;
  employeeProposalTemplate?: EmployeeProposalTemplateUpdateManyWithoutEmployeesInput;
  employeeRecurringExpense?: EmployeeRecurringExpenseUpdateManyWithoutEmployeesInput;
  employeeSetting?: EmployeeSettingUpdateManyWithoutEmployeesInput;
  employeeTasksTask?: EmployeeTasksTaskUpdateManyWithoutEmployeesInput;
  linkedInId?: string | null;
  linkedInUrl?: string | null;
  minimumBillingRate?: number | null;
  offerDate?: Date | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationContactEmployee?: OrganizationContactEmployeeUpdateManyWithoutEmployeesInput;
  organizationDepartmentEmployee?: OrganizationDepartmentEmployeeUpdateManyWithoutEmployeesInput;
  organizationEmploymentTypeEmployee?: OrganizationEmploymentTypeEmployeeUpdateManyWithoutEmployeesInput;
  organizationPosition?: OrganizationPositionWhereUniqueInput | null;
  organizationProjectEmployee?: OrganizationProjectEmployeeUpdateManyWithoutEmployeesInput;
  organizationTeamEmployee?: OrganizationTeamEmployeeUpdateManyWithoutEmployeesInput;
  payment?: PaymentUpdateManyWithoutEmployeesInput;
  payPeriod?: string | null;
  profileLink?: string | null;
  proposal?: ProposalUpdateManyWithoutEmployeesInput;
  rejectDate?: Date | null;
  requestApprovalEmployee?: RequestApprovalEmployeeUpdateManyWithoutEmployeesInput;
  reWeeklyLimit?: number | null;
  shortDescription?: string | null;
  showAnonymousBonus?: boolean | null;
  showAverageBonus?: boolean | null;
  showAverageExpenses?: boolean | null;
  showAverageIncome?: boolean | null;
  showBillrate?: boolean | null;
  showPayperiod?: boolean | null;
  showStartWorkOn?: boolean | null;
  skillEmployee?: SkillEmployeeUpdateManyWithoutEmployeesInput;
  stackoverflowUrl?: string | null;
  startedWorkOn?: Date | null;
  tagEmployee?: TagEmployeeUpdateManyWithoutEmployeesInput;
  taskEmployee?: TaskEmployeeUpdateManyWithoutEmployeesInput;
  tenant?: TenantWhereUniqueInput | null;
  timeLog?: TimeLogUpdateManyWithoutEmployeesInput;
  timeOffPolicyEmployee?: TimeOffPolicyEmployeeUpdateManyWithoutEmployeesInput;
  timeOffRequestEmployee?: TimeOffRequestEmployeeUpdateManyWithoutEmployeesInput;
  timesheet?: TimesheetUpdateManyWithoutEmployeesInput;
  timeSlot?: TimeSlotUpdateManyWithoutEmployeesInput;
  totalJobs?: Decimal | null;
  totalWorkHours?: Decimal | null;
  twitterUrl?: string | null;
  upworkId?: string | null;
  upworkUrl?: string | null;
  user?: UserWhereUniqueInput;
  valueDate?: Date | null;
};
