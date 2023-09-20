import { Organization } from "../organization/Organization";
import { Feature } from "../feature/Feature";
import { Tenant } from "../tenant/Tenant";

export type FeatureOrganization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isEnabled: boolean;
  organization?: Organization | null;
  feature?: Feature;
  tenant?: Tenant | null;
};
