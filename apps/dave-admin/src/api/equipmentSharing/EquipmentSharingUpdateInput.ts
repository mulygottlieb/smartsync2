import { EquipmentSharingPolicyWhereUniqueInput } from "../equipmentSharingPolicy/EquipmentSharingPolicyWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../equipment/EquipmentWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharesEmployeeUpdateManyWithoutEquipmentSharingsInput } from "./EquipmentSharesEmployeeUpdateManyWithoutEquipmentSharingsInput";
import { EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput } from "./EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput";

export type EquipmentSharingUpdateInput = {
  name?: string | null;
  shareRequestDay?: Date | null;
  shareStartDay?: Date | null;
  shareEndDay?: Date | null;
  status?: number;
  createdBy?: string | null;
  createdByName?: string | null;
  equipmentSharingPolicy?: EquipmentSharingPolicyWhereUniqueInput | null;
  equipment?: EquipmentWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  equipmentSharesEmployees?: EquipmentSharesEmployeeUpdateManyWithoutEquipmentSharingsInput;
  equipmentSharesTeams?: EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput;
};
