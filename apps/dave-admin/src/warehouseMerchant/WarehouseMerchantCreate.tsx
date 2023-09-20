import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const WarehouseMerchantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
