import { SortOrder } from "../../util/SortOrder";

export type EmployeeAppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  agenda?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  startDateTime?: SortOrder;
  endDateTime?: SortOrder;
  bufferTimeStart?: SortOrder;
  bufferTimeEnd?: SortOrder;
  bufferTimeInMins?: SortOrder;
  breakTimeInMins?: SortOrder;
  breakStartTime?: SortOrder;
  emails?: SortOrder;
  status?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
