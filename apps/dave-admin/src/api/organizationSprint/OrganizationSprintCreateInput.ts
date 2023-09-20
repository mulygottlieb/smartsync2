import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TaskCreateNestedManyWithoutOrganizationSprintsInput } from "./TaskCreateNestedManyWithoutOrganizationSprintsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type OrganizationSprintCreateInput = {
  name: string;
  goal?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  length: number;
  startDate?: Date | null;
  endDate?: Date | null;
  dayStart?: number | null;
  task?: TaskCreateNestedManyWithoutOrganizationSprintsInput;
  isActive?: boolean | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject: OrganizationProjectWhereUniqueInput;
};
