import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const E2Show = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fld1" source="fld1" />
        <TextField label="fld11" source="fld11" />
        <TextField label="fld2" source="fld2" />
        <TextField label="fld22" source="fld22" />
        <TextField label="fld23" source="fld23" />
        <TextField label="fld3" source="fld3" />
        <TextField label="fld33" source="fld33" />
        <TextField label="fld34" source="fld34" />
        <TextField label="fld4" source="fld4" />
        <TextField label="fld44" source="fld44" />
        <TextField label="fld45" source="fld45" />
        <TextField label="fld46" source="fld46" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
