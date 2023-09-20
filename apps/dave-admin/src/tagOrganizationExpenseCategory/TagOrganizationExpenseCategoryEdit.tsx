import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExpenseCategoryTitle } from "../expenseCategory/ExpenseCategoryTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationExpenseCategoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
