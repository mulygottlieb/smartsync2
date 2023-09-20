import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailResetCreateInput = {
  email: string;
  oldEmail: string;
  code: number;
  token?: string | null;
  expiredAt?: Date | null;
  tenant?: TenantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
