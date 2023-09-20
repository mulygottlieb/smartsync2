import { TagWarehouse as TTagWarehouse } from "../api/tagWarehouse/TagWarehouse";

export const TAGWAREHOUSE_TITLE_FIELD = "id";

export const TagWarehouseTitle = (record: TTagWarehouse): string => {
  return record.id?.toString() || String(record.id);
};
