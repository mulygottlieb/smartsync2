import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { IncomeTitle } from "../income/IncomeTitle";

export const TagIncomeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput source="income.id" reference="Income" label="Income">
          <SelectInput optionText={IncomeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
