import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MigrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
