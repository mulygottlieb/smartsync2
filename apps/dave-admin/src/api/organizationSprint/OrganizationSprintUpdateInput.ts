import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TaskUpdateManyWithoutOrganizationSprintsInput } from "./TaskUpdateManyWithoutOrganizationSprintsInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type OrganizationSprintUpdateInput = {
  name?: string;
  goal?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  length?: number;
  startDate?: Date | null;
  endDate?: Date | null;
  dayStart?: number | null;
  task?: TaskUpdateManyWithoutOrganizationSprintsInput;
  isActive?: boolean | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput;
};
