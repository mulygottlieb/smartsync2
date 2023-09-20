import { Tenant } from "../tenant/Tenant";

export type ImportHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  file: string;
  path: string;
  size: number | null;
  status: string;
  importDate: Date;
  tenant?: Tenant | null;
};
