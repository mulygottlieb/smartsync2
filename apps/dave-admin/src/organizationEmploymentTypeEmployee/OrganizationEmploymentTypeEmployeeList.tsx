import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const OrganizationEmploymentTypeEmployeeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationEmploymentTypeEmployees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Organization Employment Type"
          source="organizationemploymenttype.id"
          reference="OrganizationEmploymentType"
        >
          <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
