import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isoCode?: SortOrder;
  country?: SortOrder;
};
