import { OrganizationRecurringExpenseWhereInput } from "./OrganizationRecurringExpenseWhereInput";
import { OrganizationRecurringExpenseOrderByInput } from "./OrganizationRecurringExpenseOrderByInput";

export type OrganizationRecurringExpenseFindManyArgs = {
  where?: OrganizationRecurringExpenseWhereInput;
  orderBy?: Array<OrganizationRecurringExpenseOrderByInput>;
  skip?: number;
  take?: number;
};
