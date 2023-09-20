import { Tenant } from "../tenant/Tenant";

export type TenantSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  value: string | null;
  tenant?: Tenant | null;
};
