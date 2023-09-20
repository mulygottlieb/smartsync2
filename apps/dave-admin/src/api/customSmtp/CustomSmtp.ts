import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type CustomSmtp = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  host: string;
  port: number;
  secure: boolean;
  username: string;
  password: string;
  isValidate: boolean;
  fromAddress: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
