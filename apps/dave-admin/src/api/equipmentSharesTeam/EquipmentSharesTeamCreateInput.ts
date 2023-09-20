import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";

export type EquipmentSharesTeamCreateInput = {
  organizationTeam: OrganizationTeamWhereUniqueInput;
  equipmentSharing: EquipmentSharingWhereUniqueInput;
};
