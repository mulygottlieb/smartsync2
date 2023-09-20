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

import { FEATURE_TITLE_FIELD } from "./FeatureTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const FeatureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Code" source="code" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Description" source="description" />
        <TextField label="Image" source="image" />
        <TextField label="Link" source="link" />
        <TextField label="Status" source="status" />
        <TextField label="Icon" source="icon" />
        <ReferenceField label="Feature" source="feature.id" reference="Feature">
          <TextField source={FEATURE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Feature"
          target="parentId"
          label="Features"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Code" source="code" />
            <BooleanField label="Is Paid" source="isPaid" />
            <TextField label="Description" source="description" />
            <TextField label="Image" source="image" />
            <TextField label="Link" source="link" />
            <TextField label="Status" source="status" />
            <TextField label="Icon" source="icon" />
            <ReferenceField
              label="Feature"
              source="feature.id"
              reference="Feature"
            >
              <TextField source={FEATURE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FeatureOrganization"
          target="featureId"
          label="FeatureOrganizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Enabled" source="isEnabled" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Feature"
              source="feature.id"
              reference="Feature"
            >
              <TextField source={FEATURE_TITLE_FIELD} />
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
