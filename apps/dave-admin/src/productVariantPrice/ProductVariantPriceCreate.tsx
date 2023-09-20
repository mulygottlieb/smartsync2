import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ProductVariantPriceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Unit Cost" source="unitCost" />
        <TextInput label="Unit Cost Currency" source="unitCostCurrency" />
        <NumberInput step={1} label="Retail Price" source="retailPrice" />
        <TextInput label="Retail Price Currency" source="retailPriceCurrency" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantProductVariantPriceProductVariantIdToproductVariant.id"
          reference="ProductVariant"
          label="Product Variant Product Variant Price Product Variant Id Toproduct Variant"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantProductVariantPriceIdToproductVariantPrice.id"
          reference="ProductVariant"
          label="Product Variant Product Variant Price Id Toproduct Variant Price"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
