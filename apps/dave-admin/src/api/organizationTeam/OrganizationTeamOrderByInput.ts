import { SortOrder } from "../../util/SortOrder";

export type OrganizationTeamOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  prefix?: SortOrder;
  publicField?: SortOrder;
  profileLink?: SortOrder;
  logo?: SortOrder;
  color?: SortOrder;
  emoji?: SortOrder;
  teamSize?: SortOrder;
  tenantId?: SortOrder;
  imageId?: SortOrder;
  createdById?: SortOrder;
  organizationId?: SortOrder;
};
