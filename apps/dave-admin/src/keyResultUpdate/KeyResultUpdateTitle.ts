import { KeyResultUpdate as TKeyResultUpdate } from "../api/keyResultUpdate/KeyResultUpdate";

export const KEYRESULTUPDATE_TITLE_FIELD = "owner";

export const KeyResultUpdateTitle = (record: TKeyResultUpdate): string => {
  return record.owner?.toString() || String(record.id);
};
