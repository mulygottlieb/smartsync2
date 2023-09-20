import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { REPORTCATEGORY_TITLE_FIELD } from "./ReportCategoryTitle";

export const ReportCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Icon Class" source="iconClass" />
        <ReferenceManyField
          reference="Report"
          target="categoryId"
          label="Reports"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
