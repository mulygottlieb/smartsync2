import { ReportOrganizationWhereInput } from "./ReportOrganizationWhereInput";
import { ReportOrganizationOrderByInput } from "./ReportOrganizationOrderByInput";

export type ReportOrganizationFindManyArgs = {
  where?: ReportOrganizationWhereInput;
  orderBy?: Array<ReportOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
