import { TagEventTypeCreateNestedManyWithoutEventTypesInput } from "./TagEventTypeCreateNestedManyWithoutEventTypesInput";
import { Decimal } from "decimal.js";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EventTypeCreateInput = {
  tagEventType?: TagEventTypeCreateNestedManyWithoutEventTypesInput;
  duration: Decimal;
  durationUnit?: string | null;
  title?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  employee?: EmployeeWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
