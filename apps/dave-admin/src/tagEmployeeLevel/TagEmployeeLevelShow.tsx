import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEELEVEL_TITLE_FIELD } from "../employeeLevel/EmployeeLevelTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagEmployeeLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Employee Level"
          source="employeelevel.id"
          reference="EmployeeLevel"
        >
          <TextField source={EMPLOYEELEVEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
