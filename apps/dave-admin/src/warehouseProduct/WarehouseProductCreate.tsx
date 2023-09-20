import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { WarehouseProductVariantTitle } from "../warehouseProductVariant/WarehouseProductVariantTitle";

export const WarehouseProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="warehouseProductVariant"
          reference="WarehouseProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseProductVariantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
