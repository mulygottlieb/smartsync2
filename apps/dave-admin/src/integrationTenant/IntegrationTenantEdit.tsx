import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { IntegrationEntitySettingTitle } from "../integrationEntitySetting/IntegrationEntitySettingTitle";
import { IntegrationMapTitle } from "../integrationMap/IntegrationMapTitle";
import { IntegrationSettingTitle } from "../integrationSetting/IntegrationSettingTitle";

export const IntegrationTenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
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
        <ReferenceArrayInput
          source="integrationEntitySetting"
          reference="IntegrationEntitySetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationEntitySettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationMap"
          reference="IntegrationMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationSetting"
          reference="IntegrationSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationSettingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
