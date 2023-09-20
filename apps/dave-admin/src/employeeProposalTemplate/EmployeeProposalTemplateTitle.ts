import { EmployeeProposalTemplate as TEmployeeProposalTemplate } from "../api/employeeProposalTemplate/EmployeeProposalTemplate";

export const EMPLOYEEPROPOSALTEMPLATE_TITLE_FIELD = "name";

export const EmployeeProposalTemplateTitle = (
  record: TEmployeeProposalTemplate
): string => {
  return record.name?.toString() || String(record.id);
};
