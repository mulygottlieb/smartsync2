import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEELEVEL_TITLE_FIELD } from "../employeeLevel/EmployeeLevelTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagEmployeeLevelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagEmployeeLevels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Employee Level"
          source="employeelevel.id"
          reference="EmployeeLevel"
        >
          <TextField source={EMPLOYEELEVEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
