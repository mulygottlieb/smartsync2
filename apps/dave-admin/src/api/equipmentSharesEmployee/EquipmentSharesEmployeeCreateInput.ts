import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";

export type EquipmentSharesEmployeeCreateInput = {
  employee: EmployeeWhereUniqueInput;
  equipmentSharing: EquipmentSharingWhereUniqueInput;
};
