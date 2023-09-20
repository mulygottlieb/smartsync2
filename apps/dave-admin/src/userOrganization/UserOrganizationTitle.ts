import { UserOrganization as TUserOrganization } from "../api/userOrganization/UserOrganization";

export const USERORGANIZATION_TITLE_FIELD = "id";

export const UserOrganizationTitle = (record: TUserOrganization): string => {
  return record.id?.toString() || String(record.id);
};
