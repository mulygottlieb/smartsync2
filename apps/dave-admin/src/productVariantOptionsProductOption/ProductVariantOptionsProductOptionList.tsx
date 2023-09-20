import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { PRODUCTOPTION_TITLE_FIELD } from "../productOption/ProductOptionTitle";

export const ProductVariantOptionsProductOptionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductVariantOptionsProductOptions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
