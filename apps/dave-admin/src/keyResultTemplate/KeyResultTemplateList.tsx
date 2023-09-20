import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GOALTEMPLATE_TITLE_FIELD } from "../goalTemplate/GoalTemplateTitle";
import { GOALKPITEMPLATE_TITLE_FIELD } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const KeyResultTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"KeyResultTemplates"}
      perPage={50}
      pagination={<Pagination />}
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
      </Datagrid>
    </List>
  );
};
