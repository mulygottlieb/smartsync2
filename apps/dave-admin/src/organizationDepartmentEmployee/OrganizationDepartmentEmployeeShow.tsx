import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "../organizationDepartment/OrganizationDepartmentTitle";

export const OrganizationDepartmentEmployeeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Department"
          source="organizationdepartment.id"
          reference="OrganizationDepartment"
        >
          <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
