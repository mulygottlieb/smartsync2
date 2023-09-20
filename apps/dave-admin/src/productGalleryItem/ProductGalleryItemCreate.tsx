import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductGalleryItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};