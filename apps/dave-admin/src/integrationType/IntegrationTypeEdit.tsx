import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { IntegrationIntegrationTypeTitle } from "../integrationIntegrationType/IntegrationIntegrationTypeTitle";

export const IntegrationTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
