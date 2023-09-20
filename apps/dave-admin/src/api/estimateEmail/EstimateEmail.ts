import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type EstimateEmail = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  email: string;
  expireDate: Date;
  convertAcceptedEstimates: boolean | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
