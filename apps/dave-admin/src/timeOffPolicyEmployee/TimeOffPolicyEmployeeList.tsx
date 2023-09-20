import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const TimeOffPolicyEmployeeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeOffPolicyEmployees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Time Off Policy"
          source="timeoffpolicy.id"
          reference="TimeOffPolicy"
        >
          <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
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
