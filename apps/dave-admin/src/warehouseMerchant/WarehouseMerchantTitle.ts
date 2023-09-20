import { WarehouseMerchant as TWarehouseMerchant } from "../api/warehouseMerchant/WarehouseMerchant";

export const WAREHOUSEMERCHANT_TITLE_FIELD = "id";

export const WarehouseMerchantTitle = (record: TWarehouseMerchant): string => {
  return record.id?.toString() || String(record.id);
};
