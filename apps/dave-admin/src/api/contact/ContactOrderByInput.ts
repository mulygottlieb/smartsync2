import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  country?: SortOrder;
  city?: SortOrder;
  address?: SortOrder;
  address2?: SortOrder;
  postcode?: SortOrder;
  regionCode?: SortOrder;
  fax?: SortOrder;
  fiscalInformation?: SortOrder;
  website?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  candidateId?: SortOrder;
  employeeId?: SortOrder;
  merchantId?: SortOrder;
  organizationContactId?: SortOrder;
  warehouseId?: SortOrder;
};
