import { E2 as TE2 } from "../api/e2/E2";

export const E2_TITLE_FIELD = "fld1";

export const E2Title = (record: TE2): string => {
  return record.fld1 || String(record.id);
};
