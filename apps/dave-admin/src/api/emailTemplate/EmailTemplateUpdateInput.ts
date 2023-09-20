import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmailSentUpdateManyWithoutEmailTemplatesInput } from "./EmailSentUpdateManyWithoutEmailTemplatesInput";

export type EmailTemplateUpdateInput = {
  name?: string;
  languageCode?: string;
  mjml?: string | null;
  hbs?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  emailSent?: EmailSentUpdateManyWithoutEmailTemplatesInput;
};
