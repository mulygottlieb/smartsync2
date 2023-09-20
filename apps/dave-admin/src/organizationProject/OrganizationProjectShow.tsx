import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "./OrganizationProjectTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "../organizationVendor/OrganizationVendorTitle";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { GOALKPI_TITLE_FIELD } from "../goalKpi/GoalKpiTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONSPRINT_TITLE_FIELD } from "../organizationSprint/OrganizationSprintTitle";
import { TIMESHEET_TITLE_FIELD } from "../timesheet/TimesheetTitle";

export const OrganizationProjectShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Billing" source="billing" />
        <TextField label="Currency" source="currency" />
        <BooleanField label="Public Field" source="publicField" />
        <TextField label="Owner" source="owner" />
        <TextField label="Task List Type" source="taskListType" />
        <TextField label="Code" source="code" />
        <TextField label="Description" source="description" />
        <TextField label="Color" source="color" />
        <BooleanField label="Billable" source="billable" />
        <BooleanField label="Billing Flat" source="billingFlat" />
        <BooleanField label="Open Source" source="openSource" />
        <TextField label="Project Url" source="projectUrl" />
        <TextField
          label="Open Source Project Url"
          source="openSourceProjectUrl"
        />
        <TextField label="Budget" source="budget" />
        <TextField label="Budget Type" source="budgetType" />
        <TextField label="Members Count" source="membersCount" />
        <TextField label="Image Url" source="imageUrl" />
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Activity"
          target="projectId"
          label="Activities"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Meta Data" source="metaData" />
            <DateField source="date" label="Date" />
            <DateField source="time" label="Time" />
            <TextField label="Duration" source="duration" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Source" source="source" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Recorded At" source="recordedAt" />
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Slot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Expense"
          target="projectId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Type Of Expense" source="typeOfExpense" />
            <TextField label="Notes" source="notes" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Purpose" source="purpose" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax Label" source="taxLabel" />
            <TextField label="Rate Value" source="rateValue" />
            <TextField label="Receipt" source="receipt" />
            <BooleanField label="Split Expense" source="splitExpense" />
            <TextField label="Reference" source="reference" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense Category"
              source="expensecategory.id"
              reference="ExpenseCategory"
            >
              <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationProject"
          target="organizationProjectId"
          label="InviteOrganizationProjects"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InvoiceItem"
          target="projectId"
          label="InvoiceItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total Value" source="totalValue" />
            <BooleanField label="Apply Tax" source="applyTax" />
            <BooleanField label="Apply Discount" source="applyDiscount" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense"
              source="expense.id"
              reference="Expense"
            >
              <TextField source={EXPENSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IssueType"
          target="projectId"
          label="IssueTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KeyResult"
          target="projectId"
          label="KeyResults"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Target Value" source="targetValue" />
            <TextField label="Initial Value" source="initialValue" />
            <TextField label="Unit" source="unit" />
            <TextField label="Update" source="update" />
            <TextField label="Progress" source="progress" />
            <TextField label="Deadline" source="deadline" />
            <TextField label="Hard Deadline" source="hardDeadline" />
            <TextField label="Soft Deadline" source="softDeadline" />
            <TextField label="Status" source="status" />
            <TextField label="Weight" source="weight" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Kpi"
              source="goalkpi.id"
              reference="GoalKpi"
            >
              <TextField source={GOALKPI_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Key Result Owner Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Key Result Lead Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Key Result Goal Id Togoal"
              source="goal.id"
              reference="Goal"
            >
              <TextField source={GOAL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationProjectEmployee"
          target="organizationProjectId"
          label="OrganizationProjectEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationSprint"
          target="projectId"
          label="OrganizationSprints"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Goal" source="goal" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Length" source="length" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Day Start" source="dayStart" />
            <BooleanField label="Is Active" source="isActive" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationTaskSetting"
          target="projectId"
          label="OrganizationTaskSettings"
        >
          <Datagrid rowClick="show">
            <BooleanField
              label="Is Tasks Comments Enabled"
              source="isTasksCommentsEnabled"
            />
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField
              label="Is Tasks Privacy Enabled"
              source="isTasksPrivacyEnabled"
            />
            <BooleanField
              label="Is Tasks Multiple Assignees Enabled"
              source="isTasksMultipleAssigneesEnabled"
            />
            <BooleanField
              label="Is Tasks Manual Time Enabled"
              source="isTasksManualTimeEnabled"
            />
            <BooleanField
              label="Is Tasks Group Estimation Enabled"
              source="isTasksGroupEstimationEnabled"
            />
            <BooleanField
              label="Is Tasks History Enabled"
              source="isTasksHistoryEnabled"
            />
            <BooleanField
              label="Is Tasks Acceptance Criteria Enabled"
              source="isTasksAcceptanceCriteriaEnabled"
            />
            <BooleanField
              label="Is Tasks Drafts Enabled"
              source="isTasksDraftsEnabled"
            />
            <BooleanField
              label="Is Tasks Estimation In Hours Enabled"
              source="isTasksEstimationInHoursEnabled"
            />
            <BooleanField
              label="Is Tasks Estimation In Story Points Enabled"
              source="isTasksEstimationInStoryPointsEnabled"
            />
            <BooleanField
              label="Is Tasks Proof Of Completion Enabled"
              source="isTasksProofOfCompletionEnabled"
            />
            <TextField
              label="Tasks Proof Of Completion Type"
              source="tasksProofOfCompletionType"
            />
            <BooleanField
              label="Is Tasks Linked Enabled"
              source="isTasksLinkedEnabled"
            />
            <BooleanField
              label="Is Tasks Notify Left Enabled"
              source="isTasksNotifyLeftEnabled"
            />
            <TextField
              label="Tasks Notify Left Period Days"
              source="tasksNotifyLeftPeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Close Enabled"
              source="isTasksAutoCloseEnabled"
            />
            <TextField
              label="Tasks Auto Close Period Days"
              source="tasksAutoClosePeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Archive Enabled"
              source="isTasksAutoArchiveEnabled"
            />
            <TextField
              label="Tasks Auto Archive Period Days"
              source="tasksAutoArchivePeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Status Enabled"
              source="isTasksAutoStatusEnabled"
            />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="projectId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Payment Date" source="paymentDate" />
            <TextField label="Amount" source="amount" />
            <TextField label="Note" source="note" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Overdue" source="overdue" />
            <TextField label="Payment Method" source="paymentMethod" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationProject"
          target="organizationProjectId"
          label="TagOrganizationProjects"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Task" target="projectId" label="Tasks">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Status" source="status" />
            <TextField label="Estimate" source="estimate" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Prefix" source="prefix" />
            <TextField label="Priority" source="priority" />
            <TextField label="Size" source="size" />
            <BooleanField label="Public Field" source="publicField" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Resolved At" source="resolvedAt" />
            <TextField label="Version" source="version" />
            <TextField label="Issue Type" source="issueType" />
            <ReferenceField
              label="Organization Sprint"
              source="organizationsprint.id"
              reference="OrganizationSprint"
            >
              <TextField source={ORGANIZATIONSPRINT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskPriority"
          target="projectId"
          label="TaskPriorities"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskRelatedIssueType"
          target="projectId"
          label="TaskRelatedIssueTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskSize"
          target="projectId"
          label="TaskSizes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskStatus"
          target="projectId"
          label="TaskStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskVersion"
          target="projectId"
          label="TaskVersions"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeLog"
          target="projectId"
          label="TimeLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Started At" source="startedAt" />
            <TextField label="Stopped At" source="stoppedAt" />
            <TextField label="Log Type" source="logType" />
            <TextField label="Source" source="source" />
            <TextField label="Description" source="description" />
            <TextField label="Reason" source="reason" />
            <BooleanField label="Is Billable" source="isBillable" />
            <TextField label="Deleted At" source="deletedAt" />
            <BooleanField label="Is Running" source="isRunning" />
            <TextField label="Version" source="version" />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Timesheet"
              source="timesheet.id"
              reference="Timesheet"
            >
              <TextField source={TIMESHEET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
