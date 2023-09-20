import { KeyResult } from "../keyResult/KeyResult";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type KeyResultUpdate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  update: number;
  progress: number;
  owner: string;
  status: string;
  keyResult?: KeyResult | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
