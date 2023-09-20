import { ImportRecord as TImportRecord } from "../api/importRecord/ImportRecord";

export const IMPORTRECORD_TITLE_FIELD = "entityType";

export const ImportRecordTitle = (record: TImportRecord): string => {
  return record.entityType?.toString() || String(record.id);
};
