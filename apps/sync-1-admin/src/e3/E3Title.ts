import { E3 as TE3 } from "../api/e3/E3";

export const E3_TITLE_FIELD = "id";

export const E3Title = (record: TE3): string => {
  return record.id || String(record.id);
};
