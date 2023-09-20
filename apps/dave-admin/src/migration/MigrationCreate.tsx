import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MigrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Timestamp" source="timestamp" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
