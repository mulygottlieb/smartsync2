import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeOffRequestTitle } from "../timeOffRequest/TimeOffRequestTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TimeOffRequestEmployeeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
