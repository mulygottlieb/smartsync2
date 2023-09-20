import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { EquipmentSharing } from "../equipmentSharing/EquipmentSharing";

export type EquipmentSharesTeam = {
  organizationTeam?: OrganizationTeam;
  equipmentSharing?: EquipmentSharing;
  id: string;
};
