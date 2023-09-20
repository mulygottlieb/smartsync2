import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { JobPresetTitle } from "../jobPreset/JobPresetTitle";

export const EmployeeJobPresetCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
