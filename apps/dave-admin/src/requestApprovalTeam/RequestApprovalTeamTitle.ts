import { RequestApprovalTeam as TRequestApprovalTeam } from "../api/requestApprovalTeam/RequestApprovalTeam";

export const REQUESTAPPROVALTEAM_TITLE_FIELD = "id";

export const RequestApprovalTeamTitle = (
  record: TRequestApprovalTeam
): string => {
  return record.id?.toString() || String(record.id);
};
