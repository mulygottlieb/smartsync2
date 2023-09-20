import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const GoalGeneralSettingList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GoalGeneralSettings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Max Objectives" source="maxObjectives" />
        <TextField label="Max Key Results" source="maxKeyResults" />
        <BooleanField
          label="Employee Can Create Objective"
          source="employeeCanCreateObjective"
        />
        <TextField label="Can Own Objectives" source="canOwnObjectives" />
        <TextField label="Can Own Key Result" source="canOwnKeyResult" />
        <BooleanField label="Kr Type Kpi" source="krTypeKPI" />
        <BooleanField label="Kr Type Task" source="krTypeTask" />
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
