import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MigrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Timestamp" source="timestamp" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
