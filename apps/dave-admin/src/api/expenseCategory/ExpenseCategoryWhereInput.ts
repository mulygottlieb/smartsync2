import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { TagOrganizationExpenseCategoryListRelationFilter } from "../tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryListRelationFilter";

export type ExpenseCategoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  expense?: ExpenseListRelationFilter;
  tagOrganizationExpenseCategory?: TagOrganizationExpenseCategoryListRelationFilter;
};
