import { SortOrder } from "../../util/SortOrder";

export type OrganizationDocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  documentUrl?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  documentId?: SortOrder;
};
