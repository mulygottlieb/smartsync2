import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ExpenseUpdateManyWithoutExpenseCategoriesInput } from "./ExpenseUpdateManyWithoutExpenseCategoriesInput";
import { TagOrganizationExpenseCategoryUpdateManyWithoutExpenseCategoriesInput } from "./TagOrganizationExpenseCategoryUpdateManyWithoutExpenseCategoriesInput";

export type ExpenseCategoryUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  expense?: ExpenseUpdateManyWithoutExpenseCategoriesInput;
  tagOrganizationExpenseCategory?: TagOrganizationExpenseCategoryUpdateManyWithoutExpenseCategoriesInput;
};
