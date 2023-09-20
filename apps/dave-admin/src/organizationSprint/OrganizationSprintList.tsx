import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";

export const OrganizationSprintList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationSprints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Goal" source="goal" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
    </List>
  );
};
