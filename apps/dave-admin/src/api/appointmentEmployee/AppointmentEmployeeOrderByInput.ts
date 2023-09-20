import { SortOrder } from "../../util/SortOrder";

export type AppointmentEmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  appointmentId?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  employeeAppointmentId?: SortOrder;
};
