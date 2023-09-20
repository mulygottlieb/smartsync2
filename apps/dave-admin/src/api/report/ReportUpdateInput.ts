import { ReportCategoryWhereUniqueInput } from "../reportCategory/ReportCategoryWhereUniqueInput";
import { ReportOrganizationUpdateManyWithoutReportsInput } from "./ReportOrganizationUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  name?: string;
  slug?: string | null;
  description?: string | null;
  image?: string | null;
  iconClass?: string | null;
  showInMenu?: boolean;
  reportCategory?: ReportCategoryWhereUniqueInput;
  reportOrganization?: ReportOrganizationUpdateManyWithoutReportsInput;
};
