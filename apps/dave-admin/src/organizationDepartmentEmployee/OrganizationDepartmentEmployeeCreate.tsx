import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";

export const OrganizationDepartmentEmployeeCreate = (
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
          source="organizationDepartment.id"
          reference="OrganizationDepartment"
          label="Organization Department"
        >
          <SelectInput optionText={OrganizationDepartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
