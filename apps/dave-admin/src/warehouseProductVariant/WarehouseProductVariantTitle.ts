import { WarehouseProductVariant as TWarehouseProductVariant } from "../api/warehouseProductVariant/WarehouseProductVariant";

export const WAREHOUSEPRODUCTVARIANT_TITLE_FIELD = "id";

export const WarehouseProductVariantTitle = (
  record: TWarehouseProductVariant
): string => {
  return record.id?.toString() || String(record.id);
};
