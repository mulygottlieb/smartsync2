import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductVariantPriceTitle } from "../productVariantPrice/ProductVariantPriceTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ProductTitle } from "../product/ProductTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ProductVariantSettingTitle } from "../productVariantSetting/ProductVariantSettingTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { ProductVariantOptionsProductOptionTitle } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOptionTitle";
import { WarehouseProductVariantTitle } from "../warehouseProductVariant/WarehouseProductVariantTitle";

export const ProductVariantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Taxes" source="taxes" />
        <TextInput label="Notes" source="notes" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput
          label="Billing Invoicing Policy"
          source="billingInvoicingPolicy"
        />
        <TextInput label="Internal Reference" source="internalReference" />
        <BooleanInput label="Enabled" source="enabled" />
        <ReferenceInput
          source="productVariantPriceProductVariantPriceIdToproductVariantPrice.id"
          reference="ProductVariantPrice"
          label="Product Variant Price Product Variant Price Id Toproduct Variant Price"
        >
          <SelectInput optionText={ProductVariantPriceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantSettingProductVariantSettingIdToproductVariantSetting.id"
          reference="ProductVariantSetting"
          label="Product Variant Setting Product Variant Setting Id Toproduct Variant Setting"
        >
          <SelectInput optionText={ProductVariantSettingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productVariantOptionsProductOption"
          reference="ProductVariantOptionsProductOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={ProductVariantOptionsProductOptionTitle}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="productVariantPriceProductVariantPriceProductVariantIdToproductVariant.id"
          reference="ProductVariantPrice"
          label="Product Variant Price Product Variant Price Product Variant Id Toproduct Variant"
        >
          <SelectInput optionText={ProductVariantPriceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantSettingProductVariantSettingProductVariantIdToproductVariant.id"
          reference="ProductVariantSetting"
          label="Product Variant Setting Product Variant Setting Product Variant Id Toproduct Variant"
        >
          <SelectInput optionText={ProductVariantSettingTitle} />
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
    </Edit>
  );
};
