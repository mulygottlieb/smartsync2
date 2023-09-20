import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type Changelog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  icon: string | null;
  title: string | null;
  date: Date;
  content: string;
  learnMoreUrl: string | null;
  isFeature: boolean | null;
  imageUrl: string | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
