import { TagOrganizationContact as TTagOrganizationContact } from "../api/tagOrganizationContact/TagOrganizationContact";

export const TAGORGANIZATIONCONTACT_TITLE_FIELD = "id";

export const TagOrganizationContactTitle = (
  record: TTagOrganizationContact
): string => {
  return record.id?.toString() || String(record.id);
};
