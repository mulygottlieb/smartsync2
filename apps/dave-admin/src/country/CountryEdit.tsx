import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Iso Code" source="isoCode" />
        <TextInput label="Country" source="country" />
      </SimpleForm>
    </Edit>
  );
};
