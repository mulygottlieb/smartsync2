import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { IntegrationEntitySettingTitle } from "../integrationEntitySetting/IntegrationEntitySettingTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const IntegrationEntitySettingTiedCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Entity" source="entity" />
        <BooleanInput label="Sync" source="sync" />
        <ReferenceInput
          source="integrationEntitySetting.id"
          reference="IntegrationEntitySetting"
          label="Integration Entity Setting"
        >
          <SelectInput optionText={IntegrationEntitySettingTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
