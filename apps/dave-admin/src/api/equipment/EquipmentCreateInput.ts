import { Decimal } from "decimal.js";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharingCreateNestedManyWithoutEquipmentItemsInput } from "./EquipmentSharingCreateNestedManyWithoutEquipmentItemsInput";
import { TagEquipmentCreateNestedManyWithoutEquipmentItemsInput } from "./TagEquipmentCreateNestedManyWithoutEquipmentItemsInput";

export type EquipmentCreateInput = {
  name: string;
  typeField: string;
  serialNumber: string;
  manufacturedYear?: Decimal | null;
  initialCost?: Decimal | null;
  currency: string;
  maxSharePeriod?: Decimal | null;
  autoApproveShare: boolean;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  equipmentSharing?: EquipmentSharingCreateNestedManyWithoutEquipmentItemsInput;
  tagEquipment?: TagEquipmentCreateNestedManyWithoutEquipmentItemsInput;
};
