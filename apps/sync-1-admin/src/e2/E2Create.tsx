import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const E2Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fld1" source="fld1" />
      </SimpleForm>
    </Create>
  );
};
