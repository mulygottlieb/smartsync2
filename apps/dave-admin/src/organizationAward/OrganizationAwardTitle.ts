import { OrganizationAward as TOrganizationAward } from "../api/organizationAward/OrganizationAward";

export const ORGANIZATIONAWARD_TITLE_FIELD = "name";

export const OrganizationAwardTitle = (record: TOrganizationAward): string => {
  return record.name?.toString() || String(record.id);
};
