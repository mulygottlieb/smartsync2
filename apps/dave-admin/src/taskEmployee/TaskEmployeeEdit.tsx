import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TaskTitle } from "../task/TaskTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const TaskEmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
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
