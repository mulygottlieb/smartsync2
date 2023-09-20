import { EquipmentSharingPolicy } from "../equipmentSharingPolicy/EquipmentSharingPolicy";
import { Equipment } from "../equipment/Equipment";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { EquipmentSharesEmployee } from "../equipmentSharesEmployee/EquipmentSharesEmployee";
import { EquipmentSharesTeam } from "../equipmentSharesTeam/EquipmentSharesTeam";

export type EquipmentSharing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  shareRequestDay: Date | null;
  shareStartDay: Date | null;
  shareEndDay: Date | null;
  status: number;
  createdBy: string | null;
  createdByName: string | null;
  equipmentSharingPolicy?: EquipmentSharingPolicy | null;
  equipment?: Equipment | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  equipmentSharesEmployees?: Array<EquipmentSharesEmployee>;
  equipmentSharesTeams?: Array<EquipmentSharesTeam>;
};
