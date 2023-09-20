import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductOptionTitle } from "../productOption/ProductOptionTitle";

export const ProductVariantOptionsProductOptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="productVariant.id"
          reference="ProductVariant"
          label="Product Variant"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productOption.id"
          reference="ProductOption"
          label="Product Option"
        >
          <SelectInput optionText={ProductOptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
