import { EmployeeAppointmentWhereInput } from "./EmployeeAppointmentWhereInput";
import { EmployeeAppointmentOrderByInput } from "./EmployeeAppointmentOrderByInput";

export type EmployeeAppointmentFindManyArgs = {
  where?: EmployeeAppointmentWhereInput;
  orderBy?: Array<EmployeeAppointmentOrderByInput>;
  skip?: number;
  take?: number;
};
