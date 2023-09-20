import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { JobPresetTitle } from "../jobPreset/JobPresetTitle";

export const EmployeeJobPresetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobPreset.id"
          reference="JobPreset"
          label="Job Preset"
        >
          <SelectInput optionText={JobPresetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
