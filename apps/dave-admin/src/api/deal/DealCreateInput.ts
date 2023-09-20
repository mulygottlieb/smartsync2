import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PipelineStageWhereUniqueInput } from "../pipelineStage/PipelineStageWhereUniqueInput";

export type DealCreateInput = {
  title: string;
  probability: number;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  user: UserWhereUniqueInput;
  pipelineStage: PipelineStageWhereUniqueInput;
};
