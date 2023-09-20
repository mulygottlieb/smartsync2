import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExpenseCategoryTitle } from "../expenseCategory/ExpenseCategoryTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationExpenseCategoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="expenseCategory.id"
          reference="ExpenseCategory"
          label="Expense Category"
        >
          <SelectInput optionText={ExpenseCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
