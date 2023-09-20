import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeOffPolicyTitle } from "../timeOffPolicy/TimeOffPolicyTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TimeOffPolicyEmployeeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
