import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportRecordUpdateInput = {
  entityType?: string;
  sourceId?: string;
  destinationId?: string;
  tenant?: TenantWhereUniqueInput | null;
};
