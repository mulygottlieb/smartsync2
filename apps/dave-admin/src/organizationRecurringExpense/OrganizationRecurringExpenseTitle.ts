import { OrganizationRecurringExpense as TOrganizationRecurringExpense } from "../api/organizationRecurringExpense/OrganizationRecurringExpense";

export const ORGANIZATIONRECURRINGEXPENSE_TITLE_FIELD = "categoryName";

export const OrganizationRecurringExpenseTitle = (
  record: TOrganizationRecurringExpense
): string => {
  return record.categoryName?.toString() || String(record.id);
};
