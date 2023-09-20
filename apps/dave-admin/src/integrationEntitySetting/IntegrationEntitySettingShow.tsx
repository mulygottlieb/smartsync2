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

import { INTEGRATIONENTITYSETTING_TITLE_FIELD } from "./IntegrationEntitySettingTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { INTEGRATIONTENANT_TITLE_FIELD } from "../integrationTenant/IntegrationTenantTitle";

export const IntegrationEntitySettingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Entity" source="entity" />
        <BooleanField label="Sync" source="sync" />
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
          label="Integration Tenant"
          source="integrationtenant.id"
          reference="IntegrationTenant"
        >
          <TextField source={INTEGRATIONTENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="IntegrationEntitySettingTied"
          target="integrationEntitySettingId"
          label="IntegrationEntitySettingTieds"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Entity" source="entity" />
            <BooleanField label="Sync" source="sync" />
            <ReferenceField
              label="Integration Entity Setting"
              source="integrationentitysetting.id"
              reference="IntegrationEntitySetting"
            >
              <TextField source={INTEGRATIONENTITYSETTING_TITLE_FIELD} />
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
