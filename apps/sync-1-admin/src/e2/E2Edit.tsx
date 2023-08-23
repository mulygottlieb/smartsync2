import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const E2Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fld1" source="fld1" />
        <TextInput label="fld11" source="fld11" />
        <TextInput label="fld2" source="fld2" />
        <TextInput label="fld22" source="fld22" />
        <TextInput label="fld23" source="fld23" />
        <TextInput label="fld3" source="fld3" />
        <TextInput label="fld4" source="fld4" />
      </SimpleForm>
    </Edit>
  );
};
