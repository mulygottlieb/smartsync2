import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeAppointmentWhereUniqueInput } from "../employeeAppointment/EmployeeAppointmentWhereUniqueInput";

export type AppointmentEmployeeCreateInput = {
  appointmentId: string;
  employee: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employeeAppointment?: EmployeeAppointmentWhereUniqueInput | null;
};
