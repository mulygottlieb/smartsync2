import { ReportCategoryWhereUniqueInput } from "../reportCategory/ReportCategoryWhereUniqueInput";
import { ReportOrganizationCreateNestedManyWithoutReportsInput } from "./ReportOrganizationCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  name: string;
  slug?: string | null;
  description?: string | null;
  image?: string | null;
  iconClass?: string | null;
  showInMenu: boolean;
  reportCategory: ReportCategoryWhereUniqueInput;
  reportOrganization?: ReportOrganizationCreateNestedManyWithoutReportsInput;
};
