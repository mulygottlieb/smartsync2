import { SortOrder } from "../../util/SortOrder";

export type EmployeeSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  month?: SortOrder;
  year?: SortOrder;
  settingType?: SortOrder;
  value?: SortOrder;
  currency?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  employeeId?: SortOrder;
};
