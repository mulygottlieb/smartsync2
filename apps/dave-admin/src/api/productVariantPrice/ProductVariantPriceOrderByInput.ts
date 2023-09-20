import { SortOrder } from "../../util/SortOrder";

export type ProductVariantPriceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  unitCost?: SortOrder;
  unitCostCurrency?: SortOrder;
  retailPrice?: SortOrder;
  retailPriceCurrency?: SortOrder;
  organizationId?: SortOrder;
  productVariantId?: SortOrder;
  tenantId?: SortOrder;
  productVariantProductVariantPriceIdToproductVariantPriceId?: SortOrder;
};
