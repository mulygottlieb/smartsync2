import { Decimal } from "decimal.js";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TagIncomeUpdateManyWithoutIncomesInput } from "./TagIncomeUpdateManyWithoutIncomesInput";

export type IncomeUpdateInput = {
  amount?: Decimal;
  currency?: string;
  valueDate?: Date | null;
  notes?: string | null;
  isBonus?: boolean | null;
  reference?: string | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  tagIncome?: TagIncomeUpdateManyWithoutIncomesInput;
};
