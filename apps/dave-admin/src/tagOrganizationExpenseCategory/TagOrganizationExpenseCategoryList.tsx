import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagOrganizationExpenseCategoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagOrganizationExpenseCategories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Expense Category"
          source="expensecategory.id"
          reference="ExpenseCategory"
        >
          <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
