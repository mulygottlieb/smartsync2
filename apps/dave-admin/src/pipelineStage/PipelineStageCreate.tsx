import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { PipelineTitle } from "../pipeline/PipelineTitle";
import { DealTitle } from "../deal/DealTitle";

export const PipelineStageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Index" source="index" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="pipeline.id"
          reference="Pipeline"
          label="Pipeline"
        >
          <SelectInput optionText={PipelineTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="deal"
          reference="Deal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DealTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
