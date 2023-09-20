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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMAILTEMPLATE_TITLE_FIELD } from "../emailTemplate/EmailTemplateTitle";

export const EmailSentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmailSents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Content" source="content" />
        <TextField label="Email" source="email" />
        <BooleanField label="Is Archived" source="isArchived" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Email Template"
          source="emailtemplate.id"
          reference="EmailTemplate"
        >
          <TextField source={EMAILTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};