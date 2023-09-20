import { Merchant } from "../merchant/Merchant";
import { Warehouse } from "../warehouse/Warehouse";

export type WarehouseMerchant = {
  merchant?: Merchant;
  warehouse?: Warehouse;
  id: string;
};
