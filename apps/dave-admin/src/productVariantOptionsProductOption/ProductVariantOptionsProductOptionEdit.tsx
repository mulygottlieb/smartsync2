import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductOptionTitle } from "../productOption/ProductOptionTitle";

export const ProductVariantOptionsProductOptionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
