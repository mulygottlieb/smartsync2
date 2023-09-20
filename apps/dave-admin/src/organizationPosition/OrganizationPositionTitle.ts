import { OrganizationPosition as TOrganizationPosition } from "../api/organizationPosition/OrganizationPosition";

export const ORGANIZATIONPOSITION_TITLE_FIELD = "name";

export const OrganizationPositionTitle = (
  record: TOrganizationPosition
): string => {
  return record.name?.toString() || String(record.id);
};
