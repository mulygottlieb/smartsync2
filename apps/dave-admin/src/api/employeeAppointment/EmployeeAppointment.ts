import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { AppointmentEmployee } from "../appointmentEmployee/AppointmentEmployee";

export type EmployeeAppointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agenda: string;
  description: string | null;
  location: string | null;
  startDateTime: Date;
  endDateTime: Date;
  bufferTimeStart: boolean | null;
  bufferTimeEnd: boolean | null;
  bufferTimeInMins: number | null;
  breakTimeInMins: number | null;
  breakStartTime: Date | null;
  emails: string | null;
  status: string | null;
  employee?: Employee | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  appointmentEmployee?: Array<AppointmentEmployee>;
};
