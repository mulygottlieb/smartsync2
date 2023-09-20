import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquipmentSharingWhereUniqueInput } from "../equipmentSharing/EquipmentSharingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EquipmentSharesEmployeeWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  equipmentSharing?: EquipmentSharingWhereUniqueInput;
  id?: StringFilter;
};
