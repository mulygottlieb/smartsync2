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
import { FEATURE_TITLE_FIELD } from "./FeatureTitle";

export const FeatureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Features"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Code" source="code" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Description" source="description" />
        <TextField label="Image" source="image" />
        <TextField label="Link" source="link" />
        <TextField label="Status" source="status" />
        <TextField label="Icon" source="icon" />
        <ReferenceField label="Feature" source="feature.id" reference="Feature">
          <TextField source={FEATURE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
