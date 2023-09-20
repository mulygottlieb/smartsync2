import { WarehouseProduct as TWarehouseProduct } from "../api/warehouseProduct/WarehouseProduct";

export const WAREHOUSEPRODUCT_TITLE_FIELD = "id";

export const WarehouseProductTitle = (record: TWarehouseProduct): string => {
  return record.id?.toString() || String(record.id);
};
