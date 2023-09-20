import { ReportCreateNestedManyWithoutReportCategoriesInput } from "./ReportCreateNestedManyWithoutReportCategoriesInput";

export type ReportCategoryCreateInput = {
  name: string;
  iconClass?: string | null;
  report?: ReportCreateNestedManyWithoutReportCategoriesInput;
};
