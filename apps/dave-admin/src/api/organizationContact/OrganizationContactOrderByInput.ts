import { SortOrder } from "../../util/SortOrder";

export type OrganizationContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  primaryEmail?: SortOrder;
  primaryPhone?: SortOrder;
  notes?: SortOrder;
  imageUrl?: SortOrder;
  budget?: SortOrder;
  createdBy?: SortOrder;
  inviteStatus?: SortOrder;
  contactType?: SortOrder;
  budgetType?: SortOrder;
  organizationId?: SortOrder;
  imageId?: SortOrder;
  contactId?: SortOrder;
  tenantId?: SortOrder;
  dealId?: SortOrder;
};
