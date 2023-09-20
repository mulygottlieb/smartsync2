import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmailTemplateWhereUniqueInput } from "../emailTemplate/EmailTemplateWhereUniqueInput";

export type EmailSentUpdateInput = {
  name?: string | null;
  content?: string | null;
  email?: string;
  isArchived?: boolean | null;
  tenant?: TenantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  emailTemplate?: EmailTemplateWhereUniqueInput;
};
