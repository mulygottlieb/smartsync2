import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentTitle } from "../payment/PaymentTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagPaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="payment.id" reference="Payment" label="Payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
