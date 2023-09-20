import { TagOrganizationPosition as TTagOrganizationPosition } from "../api/tagOrganizationPosition/TagOrganizationPosition";

export const TAGORGANIZATIONPOSITION_TITLE_FIELD = "id";

export const TagOrganizationPositionTitle = (
  record: TTagOrganizationPosition
): string => {
  return record.id?.toString() || String(record.id);
};
