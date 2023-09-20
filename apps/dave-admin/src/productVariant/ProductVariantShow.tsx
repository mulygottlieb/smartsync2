import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCTVARIANT_TITLE_FIELD } from "./ProductVariantTitle";
import { PRODUCTOPTION_TITLE_FIELD } from "../productOption/ProductOptionTitle";
import { WAREHOUSEPRODUCT_TITLE_FIELD } from "../warehouseProduct/WarehouseProductTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PRODUCTVARIANTPRICE_TITLE_FIELD } from "../productVariantPrice/ProductVariantPriceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANTSETTING_TITLE_FIELD } from "../productVariantSetting/ProductVariantSettingTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";

export const ProductVariantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Taxes" source="taxes" />
        <TextField label="Notes" source="notes" />
        <TextField label="Quantity" source="quantity" />
        <TextField
          label="Billing Invoicing Policy"
          source="billingInvoicingPolicy"
        />
        <TextField label="Internal Reference" source="internalReference" />
        <BooleanField label="Enabled" source="enabled" />
        <ReferenceField
          label="Product Variant Price Product Variant Price Id Toproduct Variant Price"
          source="productvariantprice.id"
          reference="ProductVariantPrice"
        >
          <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Setting Product Variant Setting Id Toproduct Variant Setting"
          source="productvariantsetting.id"
          reference="ProductVariantSetting"
        >
          <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Price Product Variant Price Product Variant Id Toproduct Variant"
          source="productvariantprice.id"
          reference="ProductVariantPrice"
        >
          <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Setting Product Variant Setting Product Variant Id Toproduct Variant"
          source="productvariantsetting.id"
          reference="ProductVariantSetting"
        >
          <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ProductVariantOptionsProductOption"
          target="productVariantId"
          label="ProductVariantOptionsProductOptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Product Variant"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option"
              source="productoption.id"
              reference="ProductOption"
            >
              <TextField source={PRODUCTOPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WarehouseProductVariant"
          target="variantId"
          label="WarehouseProductVariants"
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
