import { Tenant } from "../tenant/Tenant";

export type ImportRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entityType: string;
  sourceId: string;
  destinationId: string;
  importDate: Date;
  tenant?: Tenant | null;
};
