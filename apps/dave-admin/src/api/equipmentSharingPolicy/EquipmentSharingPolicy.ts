import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { EquipmentSharing } from "../equipmentSharing/EquipmentSharing";

export type EquipmentSharingPolicy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  equipmentSharing?: Array<EquipmentSharing>;
};
