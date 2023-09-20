import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";

export type EquipmentSharesEmployeeUpdateInput = {
  employee?: EmployeeWhereUniqueInput;
  equipmentSharing?: EquipmentSharingWhereUniqueInput;
};
