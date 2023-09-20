import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";

export type EquipmentSharesTeamUpdateInput = {
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  equipmentSharing?: EquipmentSharingWhereUniqueInput;
};
