import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EquipmentSharesTeamWhereInput = {
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  equipmentSharing?: EquipmentSharingWhereUniqueInput;
  id?: StringFilter;
};
