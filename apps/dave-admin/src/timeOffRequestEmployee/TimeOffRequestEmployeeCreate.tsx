import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeOffRequestTitle } from "../timeOffRequest/TimeOffRequestTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TimeOffRequestEmployeeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="timeOffRequest.id"
          reference="TimeOffRequest"
          label="Time Off Request"
        >
          <SelectInput optionText={TimeOffRequestTitle} />
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
