import { ImportHistory as TImportHistory } from "../api/importHistory/ImportHistory";

export const IMPORTHISTORY_TITLE_FIELD = "file";

export const ImportHistoryTitle = (record: TImportHistory): string => {
  return record.file?.toString() || String(record.id);
};
