import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { PipelineStage } from "../pipelineStage/PipelineStage";

export type Pipeline = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string;
  isActive: boolean;
  tenant?: Tenant | null;
  organization?: Organization | null;
  pipelineStage?: Array<PipelineStage>;
};
