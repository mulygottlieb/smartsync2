import { SortOrder } from "../../util/SortOrder";

export type IntegrationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  imgSrc?: SortOrder;
  isComingSoon?: SortOrder;
  isPaid?: SortOrder;
  version?: SortOrder;
  docUrl?: SortOrder;
  isFreeTrial?: SortOrder;
  freeTrialPeriod?: SortOrder;
  order?: SortOrder;
};
