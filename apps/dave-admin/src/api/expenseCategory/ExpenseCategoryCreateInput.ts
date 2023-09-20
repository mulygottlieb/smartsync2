import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ExpenseCreateNestedManyWithoutExpenseCategoriesInput } from "./ExpenseCreateNestedManyWithoutExpenseCategoriesInput";
import { TagOrganizationExpenseCategoryCreateNestedManyWithoutExpenseCategoriesInput } from "./TagOrganizationExpenseCategoryCreateNestedManyWithoutExpenseCategoriesInput";

export type ExpenseCategoryCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  expense?: ExpenseCreateNestedManyWithoutExpenseCategoriesInput;
  tagOrganizationExpenseCategory?: TagOrganizationExpenseCategoryCreateNestedManyWithoutExpenseCategoriesInput;
};
