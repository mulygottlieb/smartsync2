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

import { TASK_TITLE_FIELD } from "./TaskTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { GOALKPI_TITLE_FIELD } from "../goalKpi/GoalKpiTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONSPRINT_TITLE_FIELD } from "../organizationSprint/OrganizationSprintTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { TIMESHEET_TITLE_FIELD } from "../timesheet/TimesheetTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Activity"
          target="taskId"
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
          reference="EmployeeTasksTask"
          target="taskId"
          label="EmployeeTasksTasks"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
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
          reference="InvoiceItem"
          target="taskId"
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
          reference="KeyResult"
          target="taskId"
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
          reference="OrganizationTeamTasksTask"
          target="taskId"
          label="OrganizationTeamTasksTasks"
        >
          <Datagrid rowClick="show">
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
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagTask"
          target="taskId"
          label="TagTasks"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Task" target="parentId" label="Tasks">
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
          reference="TaskEmployee"
          target="taskId"
          label="TaskEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
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
          reference="TaskLinkedIssue"
          target="taskToId"
          label="TaskLinkedIssues"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Action" source="action" />
            <ReferenceField
              label="Task Task Linked Issues Task To Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
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
              label="Task Task Linked Issues Task From Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskLinkedIssue"
          target="taskFromId"
          label="TaskLinkedIssues"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Action" source="action" />
            <ReferenceField
              label="Task Task Linked Issues Task To Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
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
              label="Task Task Linked Issues Task From Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskTeam"
          target="taskId"
          label="TaskTeams"
        >
          <Datagrid rowClick="show">
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
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeLog"
          target="taskId"
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
