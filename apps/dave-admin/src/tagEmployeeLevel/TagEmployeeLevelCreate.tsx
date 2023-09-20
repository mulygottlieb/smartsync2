import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeLevelTitle } from "../employeeLevel/EmployeeLevelTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagEmployeeLevelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employeeLevel.id"
          reference="EmployeeLevel"
          label="Employee Level"
        >
          <SelectInput optionText={EmployeeLevelTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
