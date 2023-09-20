import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { KeyResultTemplate } from "../keyResultTemplate/KeyResultTemplate";

export type GoalTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  level: string;
  category: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  keyResultTemplate?: Array<KeyResultTemplate>;
};
