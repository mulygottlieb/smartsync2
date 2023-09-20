import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { EmployeeAppointment } from "../employeeAppointment/EmployeeAppointment";

export type AppointmentEmployee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointmentId: string;
  employee?: Employee;
  tenant?: Tenant | null;
  organization?: Organization | null;
  employeeAppointment?: EmployeeAppointment | null;
};
