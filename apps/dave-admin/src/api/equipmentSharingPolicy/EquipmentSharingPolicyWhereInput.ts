import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharingListRelationFilter } from "../equipmentSharing/EquipmentSharingListRelationFilter";

export type EquipmentSharingPolicyWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  equipmentSharing?: EquipmentSharingListRelationFilter;
};
