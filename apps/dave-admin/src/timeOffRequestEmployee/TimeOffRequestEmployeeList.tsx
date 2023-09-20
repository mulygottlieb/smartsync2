import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TIMEOFFREQUEST_TITLE_FIELD } from "../timeOffRequest/TimeOffRequestTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const TimeOffRequestEmployeeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeOffRequestEmployees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Time Off Request"
          source="timeoffrequest.id"
          reference="TimeOffRequest"
        >
          <TextField source={TIMEOFFREQUEST_TITLE_FIELD} />
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
