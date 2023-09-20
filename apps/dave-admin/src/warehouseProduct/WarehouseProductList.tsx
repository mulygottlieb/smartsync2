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
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const WarehouseProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WarehouseProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Quantity" source="quantity" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Warehouse"
          source="warehouse.id"
          reference="Warehouse"
        >
          <TextField source={WAREHOUSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
