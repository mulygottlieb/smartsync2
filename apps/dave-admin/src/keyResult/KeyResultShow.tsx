import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { KEYRESULT_TITLE_FIELD } from "./KeyResultTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { GOALKPI_TITLE_FIELD } from "../goalKpi/GoalKpiTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";

export const KeyResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
        <ReferenceManyField
          reference="Goal"
          target="alignedKeyResultId"
          label="Goals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Deadline" source="deadline" />
            <TextField label="Level" source="level" />
            <TextField label="Progress" source="progress" />
            <ReferenceField
              label="Employee Goal Owner Employee Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Key Result Goal Aligned Key Result Id Tokey Result"
              source="keyresult.id"
              reference="KeyResult"
            >
              <TextField source={KEYRESULT_TITLE_FIELD} />
            </ReferenceField>
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
              label="Employee Goal Lead Id Toemployee"
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KeyResultUpdate"
          target="keyResultId"
          label="KeyResultUpdates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Update" source="update" />
            <TextField label="Progress" source="progress" />
            <TextField label="Owner" source="owner" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Key Result"
              source="keyresult.id"
              reference="KeyResult"
            >
              <TextField source={KEYRESULT_TITLE_FIELD} />
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
      </SimpleShowLayout>
    </Show>
  );
};
