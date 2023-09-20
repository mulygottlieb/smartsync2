import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { User } from "../user/User";
import { PipelineStage } from "../pipelineStage/PipelineStage";

export type Deal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  probability: number;
  organizationContact?: OrganizationContact | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  user?: User;
  pipelineStage?: PipelineStage;
};
