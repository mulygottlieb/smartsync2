import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { JOBPRESET_TITLE_FIELD } from "../jobPreset/JobPresetTitle";

export const EmployeeJobPresetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Job Preset"
          source="jobpreset.id"
          reference="JobPreset"
        >
          <TextField source={JOBPRESET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
