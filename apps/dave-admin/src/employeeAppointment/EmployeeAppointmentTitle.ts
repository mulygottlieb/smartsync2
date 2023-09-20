import { EmployeeAppointment as TEmployeeAppointment } from "../api/employeeAppointment/EmployeeAppointment";

export const EMPLOYEEAPPOINTMENT_TITLE_FIELD = "agenda";

export const EmployeeAppointmentTitle = (
  record: TEmployeeAppointment
): string => {
  return record.agenda?.toString() || String(record.id);
};
