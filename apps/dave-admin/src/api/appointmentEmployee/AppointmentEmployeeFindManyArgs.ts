import { AppointmentEmployeeWhereInput } from "./AppointmentEmployeeWhereInput";
import { AppointmentEmployeeOrderByInput } from "./AppointmentEmployeeOrderByInput";

export type AppointmentEmployeeFindManyArgs = {
  where?: AppointmentEmployeeWhereInput;
  orderBy?: Array<AppointmentEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
