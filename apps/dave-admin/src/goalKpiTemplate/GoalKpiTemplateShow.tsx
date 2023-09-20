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

import { GOALTEMPLATE_TITLE_FIELD } from "../goalTemplate/GoalTemplateTitle";
import { GOALKPITEMPLATE_TITLE_FIELD } from "./GoalKpiTemplateTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const GoalKpiTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Unit" source="unit" />
        <TextField label="Operator" source="operator" />
        <TextField label="Current Value" source="currentValue" />
        <TextField label="Target Value" source="targetValue" />
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
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="KeyResultTemplate"
          target="kpiId"
          label="KeyResultTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Unit" source="unit" />
            <TextField label="Target Value" source="targetValue" />
            <TextField label="Initial Value" source="initialValue" />
            <TextField label="Deadline" source="deadline" />
            <ReferenceField
              label="Goal Template"
              source="goaltemplate.id"
              reference="GoalTemplate"
            >
              <TextField source={GOALTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Kpi Template"
              source="goalkpitemplate.id"
              reference="GoalKpiTemplate"
            >
              <TextField source={GOALKPITEMPLATE_TITLE_FIELD} />
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
