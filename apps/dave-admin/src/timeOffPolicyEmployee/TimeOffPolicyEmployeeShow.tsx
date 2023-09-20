import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const TimeOffPolicyEmployeeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Time Off Policy"
          source="timeoffpolicy.id"
          reference="TimeOffPolicy"
        >
          <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
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
