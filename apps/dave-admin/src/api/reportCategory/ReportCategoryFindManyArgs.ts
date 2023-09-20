import { ReportCategoryWhereInput } from "./ReportCategoryWhereInput";
import { ReportCategoryOrderByInput } from "./ReportCategoryOrderByInput";

export type ReportCategoryFindManyArgs = {
  where?: ReportCategoryWhereInput;
  orderBy?: Array<ReportCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
