import { EquipmentSharingPolicyWhereInput } from "./EquipmentSharingPolicyWhereInput";
import { EquipmentSharingPolicyOrderByInput } from "./EquipmentSharingPolicyOrderByInput";

export type EquipmentSharingPolicyFindManyArgs = {
  where?: EquipmentSharingPolicyWhereInput;
  orderBy?: Array<EquipmentSharingPolicyOrderByInput>;
  skip?: number;
  take?: number;
};
