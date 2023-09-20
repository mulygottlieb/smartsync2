import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { ProductGalleryItemTitle } from "../productGalleryItem/ProductGalleryItemTitle";
import { ProductOptionGroupTitle } from "../productOptionGroup/ProductOptionGroupTitle";
import { ProductTranslationTitle } from "../productTranslation/ProductTranslationTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { TagProductTitle } from "../tagProduct/TagProductTitle";
import { WarehouseProductTitle } from "../warehouseProduct/WarehouseProductTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="Code" source="code" />
        <TextInput label="Image Url" source="imageUrl" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productType.id"
          reference="ProductType"
          label="Product Type"
        >
          <SelectInput optionText={ProductTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productCategory.id"
          reference="ProductCategory"
          label="Product Category"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGalleryItem"
          reference="ProductGalleryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGalleryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productOptionGroup"
          reference="ProductOptionGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productTranslation"
          reference="ProductTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariant"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagProduct"
          reference="TagProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseProduct"
          reference="WarehouseProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
