import { AccountingTemplate as TAccountingTemplate } from "../api/accountingTemplate/AccountingTemplate";

export const ACCOUNTINGTEMPLATE_TITLE_FIELD = "name";

export const AccountingTemplateTitle = (
  record: TAccountingTemplate
): string => {
  return record.name?.toString() || String(record.id);
};
