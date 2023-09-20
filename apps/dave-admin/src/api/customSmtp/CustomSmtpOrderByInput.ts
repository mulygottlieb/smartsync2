import { SortOrder } from "../../util/SortOrder";

export type CustomSmtpOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  host?: SortOrder;
  port?: SortOrder;
  secure?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  isValidate?: SortOrder;
  fromAddress?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
