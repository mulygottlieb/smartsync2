import { ReportOrganization as TReportOrganization } from "../api/reportOrganization/ReportOrganization";

export const REPORTORGANIZATION_TITLE_FIELD = "id";

export const ReportOrganizationTitle = (
  record: TReportOrganization
): string => {
  return record.id?.toString() || String(record.id);
};
