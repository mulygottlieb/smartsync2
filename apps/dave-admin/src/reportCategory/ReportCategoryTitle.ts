import { ReportCategory as TReportCategory } from "../api/reportCategory/ReportCategory";

export const REPORTCATEGORY_TITLE_FIELD = "name";

export const ReportCategoryTitle = (record: TReportCategory): string => {
  return record.name?.toString() || String(record.id);
};
