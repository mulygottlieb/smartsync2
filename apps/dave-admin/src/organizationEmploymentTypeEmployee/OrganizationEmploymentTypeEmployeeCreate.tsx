import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationEmploymentTypeTitle } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const OrganizationEmploymentTypeEmployeeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationEmploymentType.id"
          reference="OrganizationEmploymentType"
          label="Organization Employment Type"
        >
          <SelectInput optionText={OrganizationEmploymentTypeTitle} />
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
