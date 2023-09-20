import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  thirdPartyId?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  hash?: SortOrder;
  imageUrl?: SortOrder;
  preferredLanguage?: SortOrder;
  refreshToken?: SortOrder;
  isActive?: SortOrder;
  preferredComponentLayout?: SortOrder;
  code?: SortOrder;
  codeExpireAt?: SortOrder;
  emailVerifiedAt?: SortOrder;
  emailToken?: SortOrder;
  phoneNumber?: SortOrder;
  timeZone?: SortOrder;
  imageId?: SortOrder;
  tenantId?: SortOrder;
  roleId?: SortOrder;
  candidateId?: SortOrder;
  employeeId?: SortOrder;
};
