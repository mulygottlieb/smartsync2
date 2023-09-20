import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Iso Code" source="isoCode" />
        <TextInput label="Country" source="country" />
      </SimpleForm>
    </Create>
  );
};
