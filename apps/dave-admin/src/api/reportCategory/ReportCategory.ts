import { Report } from "../report/Report";

export type ReportCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  iconClass: string | null;
  report?: Array<Report>;
};
