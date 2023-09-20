import { EquipmentSharingPolicyWhereUniqueInput } from "../equipmentSharingPolicy/EquipmentSharingPolicyWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../equipment/EquipmentWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharesEmployeeCreateNestedManyWithoutEquipmentSharingsInput } from "./EquipmentSharesEmployeeCreateNestedManyWithoutEquipmentSharingsInput";
import { EquipmentSharesTeamCreateNestedManyWithoutEquipmentSharingsInput } from "./EquipmentSharesTeamCreateNestedManyWithoutEquipmentSharingsInput";

export type EquipmentSharingCreateInput = {
  name?: string | null;
  shareRequestDay?: Date | null;
  shareStartDay?: Date | null;
  shareEndDay?: Date | null;
  status: number;
  createdBy?: string | null;
  createdByName?: string | null;
  equipmentSharingPolicy?: EquipmentSharingPolicyWhereUniqueInput | null;
  equipment?: EquipmentWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  equipmentSharesEmployees?: EquipmentSharesEmployeeCreateNestedManyWithoutEquipmentSharingsInput;
  equipmentSharesTeams?: EquipmentSharesTeamCreateNestedManyWithoutEquipmentSharingsInput;
};
