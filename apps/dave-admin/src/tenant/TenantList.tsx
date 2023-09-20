import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";

export const TenantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tenants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Logo" source="logo" />
        <ReferenceField
          label="Image Asset Tenant Image Id Toimage Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
