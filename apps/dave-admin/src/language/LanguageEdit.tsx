import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { OrganizationLanguageTitle } from "../organizationLanguage/OrganizationLanguageTitle";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="organizationLanguage"
          reference="OrganizationLanguage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationLanguageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <BooleanInput label="Is System" source="isSystem" />
        <TextInput label="Description" source="description" />
        <TextInput label="Color" source="color" />
      </SimpleForm>
    </Edit>
  );
};
