import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { DealCreateNestedManyWithoutPipelineStagesInput } from "./DealCreateNestedManyWithoutPipelineStagesInput";

export type PipelineStageCreateInput = {
  description?: string | null;
  index: number;
  name: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  pipeline: PipelineWhereUniqueInput;
  deal?: DealCreateNestedManyWithoutPipelineStagesInput;
};
