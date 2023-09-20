import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { IntegrationTenantTitle } from "../integrationTenant/IntegrationTenantTitle";
import { IntegrationEntitySettingTiedTitle } from "../integrationEntitySettingTied/IntegrationEntitySettingTiedTitle";

export const IntegrationEntitySettingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Entity" source="entity" />
        <BooleanInput label="Sync" source="sync" />
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
        <ReferenceInput
          source="integrationTenant.id"
          reference="IntegrationTenant"
          label="Integration Tenant"
        >
          <SelectInput optionText={IntegrationTenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="integrationEntitySettingTied"
          reference="IntegrationEntitySettingTied"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationEntitySettingTiedTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
