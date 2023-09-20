import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeUpworkJobSearchCriterionTitle } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionTitle";
import { EquipmentSharesEmployeeTitle } from "../equipmentSharesEmployee/EquipmentSharesEmployeeTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { GoalKpiTitle } from "../goalKpi/GoalKpiTitle";
import { GoalKpiTemplateTitle } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { IncomeTitle } from "../income/IncomeTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { KeyResultTitle } from "../keyResult/KeyResultTitle";
import { KnowledgeBaseAuthorTitle } from "../knowledgeBaseAuthor/KnowledgeBaseAuthorTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { AppointmentEmployeeTitle } from "../appointmentEmployee/AppointmentEmployeeTitle";
import { AvailabilitySlotTitle } from "../availabilitySlot/AvailabilitySlotTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { CandidateInterviewerTitle } from "../candidateInterviewer/CandidateInterviewerTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { EmployeeAppointmentTitle } from "../employeeAppointment/EmployeeAppointmentTitle";
import { EmployeeAwardTitle } from "../employeeAward/EmployeeAwardTitle";
import { EmployeeJobPresetTitle } from "../employeeJobPreset/EmployeeJobPresetTitle";
import { EmployeePhoneTitle } from "../employeePhone/EmployeePhoneTitle";
import { EmployeeProposalTemplateTitle } from "../employeeProposalTemplate/EmployeeProposalTemplateTitle";
import { EmployeeRecurringExpenseTitle } from "../employeeRecurringExpense/EmployeeRecurringExpenseTitle";
import { EmployeeSettingTitle } from "../employeeSetting/EmployeeSettingTitle";
import { EmployeeTasksTaskTitle } from "../employeeTasksTask/EmployeeTasksTaskTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrganizationContactEmployeeTitle } from "../organizationContactEmployee/OrganizationContactEmployeeTitle";
import { OrganizationDepartmentEmployeeTitle } from "../organizationDepartmentEmployee/OrganizationDepartmentEmployeeTitle";
import { OrganizationEmploymentTypeEmployeeTitle } from "../organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeTitle";
import { OrganizationPositionTitle } from "../organizationPosition/OrganizationPositionTitle";
import { OrganizationProjectEmployeeTitle } from "../organizationProjectEmployee/OrganizationProjectEmployeeTitle";
import { OrganizationTeamEmployeeTitle } from "../organizationTeamEmployee/OrganizationTeamEmployeeTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { ProposalTitle } from "../proposal/ProposalTitle";
import { RequestApprovalEmployeeTitle } from "../requestApprovalEmployee/RequestApprovalEmployeeTitle";
import { SkillEmployeeTitle } from "../skillEmployee/SkillEmployeeTitle";
import { TagEmployeeTitle } from "../tagEmployee/TagEmployeeTitle";
import { TaskEmployeeTitle } from "../taskEmployee/TaskEmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";
import { TimeOffPolicyEmployeeTitle } from "../timeOffPolicyEmployee/TimeOffPolicyEmployeeTitle";
import { TimeOffRequestEmployeeTitle } from "../timeOffRequestEmployee/TimeOffRequestEmployeeTitle";
import { TimesheetTitle } from "../timesheet/TimesheetTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { UserTitle } from "../user/UserTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employeeUpworkJobSearchCriterion"
          reference="EmployeeUpworkJobSearchCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={EmployeeUpworkJobSearchCriterionTitle}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="End Work" source="endWork" />
        <ReferenceArrayInput
          source="equipmentSharesEmployees"
          reference="EquipmentSharesEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharesEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="eventType"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="expense"
          reference="Expense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseTitle} />
        </ReferenceArrayInput>
        <TextInput label="Facebook Url" source="facebookUrl" />
        <TextInput label="Github Url" source="githubUrl" />
        <TextInput label="Gitlab Url" source="gitlabUrl" />
        <ReferenceArrayInput
          source="goalGoalLeadIdToemployee"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalGoalOwnerEmployeeIdToemployee"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalKpi"
          reference="GoalKpi"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalKpiTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalKpiTemplate"
          reference="GoalKpiTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalKpiTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="income"
          reference="Income"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IncomeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Instagram Url" source="instagramUrl" />
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Away" source="isAway" />
        <BooleanInput label="Is Job Search Active" source="isJobSearchActive" />
        <BooleanInput label="Is Online" source="isOnline" />
        <BooleanInput label="Is Tracking Enabled" source="isTrackingEnabled" />
        <BooleanInput label="Is Tracking Time" source="isTrackingTime" />
        <BooleanInput label="Is Verified" source="isVerified" />
        <BooleanInput label="Is Vetted" source="isVetted" />
        <NumberInput label="Job Success" source="jobSuccess" />
        <ReferenceArrayInput
          source="keyResultKeyResultLeadIdToemployee"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keyResultKeyResultOwnerIdToemployee"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="knowledgeBaseAuthor"
          reference="KnowledgeBaseAuthor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseAuthorTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Accept Date" source="acceptDate" />
        <ReferenceArrayInput
          source="activity"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Allow Screenshot Capture"
          source="allowScreenshotCapture"
        />
        <BooleanInput label="Anonymous Bonus" source="anonymousBonus" />
        <ReferenceArrayInput
          source="appointmentEmployee"
          reference="AppointmentEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="availabilitySlot"
          reference="AvailabilitySlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilitySlotTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Average Bonus" source="averageBonus" />
        <NumberInput label="Average Expenses" source="averageExpenses" />
        <NumberInput label="Average Income" source="averageIncome" />
        <TextInput label="Bill Rate Currency" source="billRateCurrency" />
        <NumberInput step={1} label="Bill Rate Value" source="billRateValue" />
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="candidateInterviewer"
          reference="CandidateInterviewer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateInterviewerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <TextInput label="Description" source="description" />
        <ReferenceArrayInput
          source="employeeAppointment"
          reference="EmployeeAppointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeAward"
          reference="EmployeeAward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAwardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeJobPreset"
          reference="EmployeeJobPreset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeJobPresetTitle} />
        </ReferenceArrayInput>
        <TextInput label="Employee Level" source="employeeLevel" />
        <ReferenceArrayInput
          source="employeePhone"
          reference="EmployeePhone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeePhoneTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeProposalTemplate"
          reference="EmployeeProposalTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeProposalTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeRecurringExpense"
          reference="EmployeeRecurringExpense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRecurringExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeSetting"
          reference="EmployeeSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeTasksTask"
          reference="EmployeeTasksTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTasksTaskTitle} />
        </ReferenceArrayInput>
        <TextInput label="Linked In Id" source="linkedInId" />
        <TextInput label="Linked In Url" source="linkedInUrl" />
        <NumberInput
          step={1}
          label="Minimum Billing Rate"
          source="minimumBillingRate"
        />
        <DateTimeInput label="Offer Date" source="offerDate" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="organizationContactEmployee"
          reference="OrganizationContactEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationContactEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationDepartmentEmployee"
          reference="OrganizationDepartmentEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationDepartmentEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationEmploymentTypeEmployee"
          reference="OrganizationEmploymentTypeEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={OrganizationEmploymentTypeEmployeeTitle}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="organizationPosition.id"
          reference="OrganizationPosition"
          label="Organization Position"
        >
          <SelectInput optionText={OrganizationPositionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="organizationProjectEmployee"
          reference="OrganizationProjectEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationProjectEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeamEmployee"
          reference="OrganizationTeamEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Pay Period" source="payPeriod" />
        <TextInput label="Profile Link" source="profileLink" />
        <ReferenceArrayInput
          source="proposal"
          reference="Proposal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProposalTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Reject Date" source="rejectDate" />
        <ReferenceArrayInput
          source="requestApprovalEmployee"
          reference="RequestApprovalEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalEmployeeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Re Weekly Limit" source="reWeeklyLimit" />
        <TextInput label="Short Description" source="shortDescription" />
        <BooleanInput
          label="Show Anonymous Bonus"
          source="showAnonymousBonus"
        />
        <BooleanInput label="Show Average Bonus" source="showAverageBonus" />
        <BooleanInput
          label="Show Average Expenses"
          source="showAverageExpenses"
        />
        <BooleanInput label="Show Average Income" source="showAverageIncome" />
        <BooleanInput label="Show Billrate" source="showBillrate" />
        <BooleanInput label="Show Payperiod" source="showPayperiod" />
        <BooleanInput label="Show Start Work On" source="showStartWorkOn" />
        <ReferenceArrayInput
          source="skillEmployee"
          reference="SkillEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillEmployeeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Stackoverflow Url" source="stackoverflowUrl" />
        <DateTimeInput label="Started Work On" source="startedWorkOn" />
        <ReferenceArrayInput
          source="tagEmployee"
          reference="TagEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskEmployee"
          reference="TaskEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="timeLog"
          reference="TimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffPolicyEmployee"
          reference="TimeOffPolicyEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffPolicyEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffRequestEmployee"
          reference="TimeOffRequestEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffRequestEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timesheet"
          reference="Timesheet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimesheetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeSlot"
          reference="TimeSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Total Jobs" source="totalJobs" />
        <NumberInput label="Total Work Hours" source="totalWorkHours" />
        <TextInput label="Twitter Url" source="twitterUrl" />
        <TextInput label="Upwork Id" source="upworkId" />
        <TextInput label="Upwork Url" source="upworkUrl" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Value Date" source="valueDate" />
      </SimpleForm>
    </Edit>
  );
};
