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

import { GOALTEMPLATE_TITLE_FIELD } from "./GoalTemplateTitle";
import { GOALKPITEMPLATE_TITLE_FIELD } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const GoalTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Level" source="level" />
        <TextField label="Category" source="category" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="KeyResultTemplate"
          target="goalId"
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
