import { Employee } from "../employee/Employee";
import { EquipmentSharing } from "../equipmentSharing/EquipmentSharing";

export type EquipmentSharesEmployee = {
  employee?: Employee;
  equipmentSharing?: EquipmentSharing;
  id: string;
};
