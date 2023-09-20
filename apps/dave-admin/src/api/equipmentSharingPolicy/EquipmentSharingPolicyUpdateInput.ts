import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharingUpdateManyWithoutEquipmentSharingPoliciesInput } from "./EquipmentSharingUpdateManyWithoutEquipmentSharingPoliciesInput";

export type EquipmentSharingPolicyUpdateInput = {
  name?: string;
  description?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  equipmentSharing?: EquipmentSharingUpdateManyWithoutEquipmentSharingPoliciesInput;
};
