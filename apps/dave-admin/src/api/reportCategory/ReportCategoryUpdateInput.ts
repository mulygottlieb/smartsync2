import { ReportUpdateManyWithoutReportCategoriesInput } from "./ReportUpdateManyWithoutReportCategoriesInput";

export type ReportCategoryUpdateInput = {
  name?: string;
  iconClass?: string | null;
  report?: ReportUpdateManyWithoutReportCategoriesInput;
};
