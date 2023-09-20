import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharingListRelationFilter } from "../equipmentSharing/EquipmentSharingListRelationFilter";
import { TagEquipmentListRelationFilter } from "../tagEquipment/TagEquipmentListRelationFilter";

export type EquipmentWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  typeField?: StringFilter;
  serialNumber?: StringFilter;
  manufacturedYear?: DecimalNullableFilter;
  initialCost?: DecimalNullableFilter;
  currency?: StringFilter;
  maxSharePeriod?: DecimalNullableFilter;
  autoApproveShare?: BooleanFilter;
  imageAsset?: ImageAssetWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  equipmentSharing?: EquipmentSharingListRelationFilter;
  tagEquipment?: TagEquipmentListRelationFilter;
};
