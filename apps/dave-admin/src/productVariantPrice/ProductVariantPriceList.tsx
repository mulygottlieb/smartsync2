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
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ProductVariantPriceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductVariantPrices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Unit Cost" source="unitCost" />
        <TextField label="Unit Cost Currency" source="unitCostCurrency" />
        <TextField label="Retail Price" source="retailPrice" />
        <TextField label="Retail Price Currency" source="retailPriceCurrency" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Product Variant Price Product Variant Id Toproduct Variant"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Product Variant Price Id Toproduct Variant Price"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
