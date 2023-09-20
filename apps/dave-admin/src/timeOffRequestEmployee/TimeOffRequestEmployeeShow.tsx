import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { TIMEOFFREQUEST_TITLE_FIELD } from "../timeOffRequest/TimeOffRequestTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const TimeOffRequestEmployeeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Time Off Request"
          source="timeoffrequest.id"
          reference="TimeOffRequest"
        >
          <TextField source={TIMEOFFREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
