import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { REPORTCATEGORY_TITLE_FIELD } from "../reportCategory/ReportCategoryTitle";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
        <TextField label="Description" source="description" />
        <TextField label="Image" source="image" />
        <TextField label="Icon Class" source="iconClass" />
        <BooleanField label="Show In Menu" source="showInMenu" />
        <ReferenceField
          label="Report Category"
          source="reportcategory.id"
          reference="ReportCategory"
        >
          <TextField source={REPORTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
