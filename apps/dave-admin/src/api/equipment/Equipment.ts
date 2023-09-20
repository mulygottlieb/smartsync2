import { Decimal } from "decimal.js";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { EquipmentSharing } from "../equipmentSharing/EquipmentSharing";
import { TagEquipment } from "../tagEquipment/TagEquipment";

export type Equipment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  typeField: string;
  serialNumber: string;
  manufacturedYear: Decimal | null;
  initialCost: Decimal | null;
  currency: string;
  maxSharePeriod: Decimal | null;
  autoApproveShare: boolean;
  imageAsset?: ImageAsset | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  equipmentSharing?: Array<EquipmentSharing>;
  tagEquipment?: Array<TagEquipment>;
};
