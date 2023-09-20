import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PipelineStageUpdateManyWithoutPipelinesInput } from "./PipelineStageUpdateManyWithoutPipelinesInput";

export type PipelineUpdateInput = {
  description?: string | null;
  name?: string;
  isActive?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  pipelineStage?: PipelineStageUpdateManyWithoutPipelinesInput;
};
