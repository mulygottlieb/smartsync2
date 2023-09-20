import { EmployeeRecurringExpenseWhereInput } from "./EmployeeRecurringExpenseWhereInput";
import { EmployeeRecurringExpenseOrderByInput } from "./EmployeeRecurringExpenseOrderByInput";

export type EmployeeRecurringExpenseFindManyArgs = {
  where?: EmployeeRecurringExpenseWhereInput;
  orderBy?: Array<EmployeeRecurringExpenseOrderByInput>;
  skip?: number;
  take?: number;
};
