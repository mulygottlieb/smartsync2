import { EmployeeUpworkJobSearchCriterion as TEmployeeUpworkJobSearchCriterion } from "../api/employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterion";

export const EMPLOYEEUPWORKJOBSEARCHCRITERION_TITLE_FIELD = "keyword";

export const EmployeeUpworkJobSearchCriterionTitle = (
  record: TEmployeeUpworkJobSearchCriterion
): string => {
  return record.keyword?.toString() || String(record.id);
};
