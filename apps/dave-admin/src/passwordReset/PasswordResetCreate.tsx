import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PasswordResetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Create>
  );
};
