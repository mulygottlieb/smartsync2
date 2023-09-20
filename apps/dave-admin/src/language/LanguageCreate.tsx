import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { OrganizationLanguageTitle } from "../organizationLanguage/OrganizationLanguageTitle";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
