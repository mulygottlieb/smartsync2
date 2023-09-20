import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";

export const TagMerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
