import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PasswordResetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
