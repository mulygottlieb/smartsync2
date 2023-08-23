import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const E2Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fld1" source="fld1" />
        <TextInput label="fld11" source="fld11" />
        <TextInput label="fld2" source="fld2" />
        <TextInput label="fld22" source="fld22" />
        <TextInput label="fld23" source="fld23" />
        <TextInput label="fld3" source="fld3" />
        <TextInput label="fld33" source="fld33" />
        <TextInput label="fld4" source="fld4" />
        <TextInput label="fld44" source="fld44" />
        <TextInput label="fld45" source="fld45" />
      </SimpleForm>
    </Create>
  );
};
