import { TagOrganizationExpenseCategory as TTagOrganizationExpenseCategory } from "../api/tagOrganizationExpenseCategory/TagOrganizationExpenseCategory";

export const TAGORGANIZATIONEXPENSECATEGORY_TITLE_FIELD = "id";

export const TagOrganizationExpenseCategoryTitle = (
  record: TTagOrganizationExpenseCategory
): string => {
  return record.id?.toString() || String(record.id);
};
