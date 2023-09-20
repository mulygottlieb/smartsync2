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
import { WAREHOUSEPRODUCT_TITLE_FIELD } from "../warehouseProduct/WarehouseProductTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const WarehouseProductVariantList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WarehouseProductVariants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Quantity" source="quantity" />
        <ReferenceField
          label="Warehouse Product"
          source="warehouseproduct.id"
          reference="WarehouseProduct"
        >
          <TextField source={WAREHOUSEPRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
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
