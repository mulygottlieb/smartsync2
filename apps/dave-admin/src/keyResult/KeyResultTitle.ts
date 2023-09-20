import { KeyResult as TKeyResult } from "../api/keyResult/KeyResult";

export const KEYRESULT_TITLE_FIELD = "name";

export const KeyResultTitle = (record: TKeyResult): string => {
  return record.name?.toString() || String(record.id);
};
