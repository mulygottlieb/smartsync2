import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportRecordCreateInput = {
  entityType: string;
  sourceId: string;
  destinationId: string;
  tenant?: TenantWhereUniqueInput | null;
};
