import { EmployeeJobPresetWhereInput } from "./EmployeeJobPresetWhereInput";
import { EmployeeJobPresetOrderByInput } from "./EmployeeJobPresetOrderByInput";

export type EmployeeJobPresetFindManyArgs = {
  where?: EmployeeJobPresetWhereInput;
  orderBy?: Array<EmployeeJobPresetOrderByInput>;
  skip?: number;
  take?: number;
};
