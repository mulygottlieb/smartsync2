import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PipelineStageCreateNestedManyWithoutPipelinesInput } from "./PipelineStageCreateNestedManyWithoutPipelinesInput";

export type PipelineCreateInput = {
  description?: string | null;
  name: string;
  isActive: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  pipelineStage?: PipelineStageCreateNestedManyWithoutPipelinesInput;
};
