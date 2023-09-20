import { AppointmentEmployee as TAppointmentEmployee } from "../api/appointmentEmployee/AppointmentEmployee";

export const APPOINTMENTEMPLOYEE_TITLE_FIELD = "appointmentId";

export const AppointmentEmployeeTitle = (
  record: TAppointmentEmployee
): string => {
  return record.appointmentId?.toString() || String(record.id);
};
