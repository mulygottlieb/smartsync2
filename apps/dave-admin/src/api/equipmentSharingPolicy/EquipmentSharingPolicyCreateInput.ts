import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput } from "./EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput";

export type EquipmentSharingPolicyCreateInput = {
  name: string;
  description?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  equipmentSharing?: EquipmentSharingCreateNestedManyWithoutEquipmentSharingPoliciesInput;
};
