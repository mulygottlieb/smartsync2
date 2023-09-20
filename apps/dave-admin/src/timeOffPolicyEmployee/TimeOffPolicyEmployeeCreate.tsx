import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeOffPolicyTitle } from "../timeOffPolicy/TimeOffPolicyTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TimeOffPolicyEmployeeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="timeOffPolicy.id"
          reference="TimeOffPolicy"
          label="Time Off Policy"
        >
          <SelectInput optionText={TimeOffPolicyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
