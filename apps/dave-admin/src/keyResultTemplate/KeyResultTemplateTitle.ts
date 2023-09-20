import { KeyResultTemplate as TKeyResultTemplate } from "../api/keyResultTemplate/KeyResultTemplate";

export const KEYRESULTTEMPLATE_TITLE_FIELD = "name";

export const KeyResultTemplateTitle = (record: TKeyResultTemplate): string => {
  return record.name?.toString() || String(record.id);
};
