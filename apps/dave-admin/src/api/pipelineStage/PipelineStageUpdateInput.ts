import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { DealUpdateManyWithoutPipelineStagesInput } from "./DealUpdateManyWithoutPipelineStagesInput";

export type PipelineStageUpdateInput = {
  description?: string | null;
  index?: number;
  name?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  pipeline?: PipelineWhereUniqueInput;
  deal?: DealUpdateManyWithoutPipelineStagesInput;
};
