import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ImportRecordWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  entityType?: StringFilter;
  sourceId?: StringFilter;
  destinationId?: StringFilter;
  importDate?: DateTimeFilter;
  tenant?: TenantWhereUniqueInput;
};
