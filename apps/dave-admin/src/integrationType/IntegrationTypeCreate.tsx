import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { IntegrationIntegrationTypeTitle } from "../integrationIntegrationType/IntegrationIntegrationTypeTitle";

export const IntegrationTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Group Name" source="groupName" />
        <NumberInput step={1} label="Order" source="order" />
        <ReferenceArrayInput
          source="integrationIntegrationType"
          reference="IntegrationIntegrationType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationIntegrationTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
