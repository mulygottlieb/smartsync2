import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeLevelTitle } from "../employeeLevel/EmployeeLevelTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagEmployeeLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
