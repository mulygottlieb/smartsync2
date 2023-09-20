import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Pipeline } from "../pipeline/Pipeline";
import { Deal } from "../deal/Deal";

export type PipelineStage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  index: number;
  name: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  pipeline?: Pipeline;
  deal?: Array<Deal>;
};
