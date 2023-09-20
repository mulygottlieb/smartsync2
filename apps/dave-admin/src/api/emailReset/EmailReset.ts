import { Tenant } from "../tenant/Tenant";
import { User } from "../user/User";

export type EmailReset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  oldEmail: string;
  code: number;
  token: string | null;
  expiredAt: Date | null;
  tenant?: Tenant | null;
  user?: User | null;
};
