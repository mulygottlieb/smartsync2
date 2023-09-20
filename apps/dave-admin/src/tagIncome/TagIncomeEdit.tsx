import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { IncomeTitle } from "../income/IncomeTitle";

export const TagIncomeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput source="income.id" reference="Income" label="Income">
          <SelectInput optionText={IncomeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
