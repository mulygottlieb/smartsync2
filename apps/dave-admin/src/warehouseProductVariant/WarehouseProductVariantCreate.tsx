import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WarehouseProductTitle } from "../warehouseProduct/WarehouseProductTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const WarehouseProductVariantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput
          source="warehouseProduct.id"
          reference="WarehouseProduct"
          label="Warehouse Product"
        >
          <SelectInput optionText={WarehouseProductTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariant.id"
          reference="ProductVariant"
          label="Product Variant"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
