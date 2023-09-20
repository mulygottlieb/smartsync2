import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { AppointmentEmployeeUpdateManyWithoutEmployeeAppointmentsInput } from "./AppointmentEmployeeUpdateManyWithoutEmployeeAppointmentsInput";

export type EmployeeAppointmentUpdateInput = {
  agenda?: string;
  description?: string | null;
  location?: string | null;
  startDateTime?: Date;
  endDateTime?: Date;
  bufferTimeStart?: boolean | null;
  bufferTimeEnd?: boolean | null;
  bufferTimeInMins?: number | null;
  breakTimeInMins?: number | null;
  breakStartTime?: Date | null;
  emails?: string | null;
  status?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  appointmentEmployee?: AppointmentEmployeeUpdateManyWithoutEmployeeAppointmentsInput;
};
