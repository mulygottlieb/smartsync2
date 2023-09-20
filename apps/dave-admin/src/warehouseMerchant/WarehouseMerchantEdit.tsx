import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const WarehouseMerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
