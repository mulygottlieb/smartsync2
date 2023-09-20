import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { PRODUCTOPTION_TITLE_FIELD } from "../productOption/ProductOptionTitle";

export const ProductVariantOptionsProductOptionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
