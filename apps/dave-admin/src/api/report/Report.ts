import { ReportCategory } from "../reportCategory/ReportCategory";
import { ReportOrganization } from "../reportOrganization/ReportOrganization";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string | null;
  description: string | null;
  image: string | null;
  iconClass: string | null;
  showInMenu: boolean;
  reportCategory?: ReportCategory;
  reportOrganization?: Array<ReportOrganization>;
};
