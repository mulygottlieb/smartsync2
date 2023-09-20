import { SortOrder } from "../../util/SortOrder";

export type EstimateEmailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  token?: SortOrder;
  email?: SortOrder;
  expireDate?: SortOrder;
  convertAcceptedEstimates?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
