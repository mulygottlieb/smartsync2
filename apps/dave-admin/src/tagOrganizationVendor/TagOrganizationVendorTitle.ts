import { TagOrganizationVendor as TTagOrganizationVendor } from "../api/tagOrganizationVendor/TagOrganizationVendor";

export const TAGORGANIZATIONVENDOR_TITLE_FIELD = "id";

export const TagOrganizationVendorTitle = (
  record: TTagOrganizationVendor
): string => {
  return record.id?.toString() || String(record.id);
};
