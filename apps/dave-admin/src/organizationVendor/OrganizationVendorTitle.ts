import { OrganizationVendor as TOrganizationVendor } from "../api/organizationVendor/OrganizationVendor";

export const ORGANIZATIONVENDOR_TITLE_FIELD = "name";

export const OrganizationVendorTitle = (
  record: TOrganizationVendor
): string => {
  return record.name?.toString() || String(record.id);
};
