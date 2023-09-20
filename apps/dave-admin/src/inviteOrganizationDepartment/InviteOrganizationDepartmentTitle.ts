import { InviteOrganizationDepartment as TInviteOrganizationDepartment } from "../api/inviteOrganizationDepartment/InviteOrganizationDepartment";

export const INVITEORGANIZATIONDEPARTMENT_TITLE_FIELD = "id";

export const InviteOrganizationDepartmentTitle = (
  record: TInviteOrganizationDepartment
): string => {
  return record.id?.toString() || String(record.id);
};
