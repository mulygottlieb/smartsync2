import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmailSentCreateNestedManyWithoutEmailTemplatesInput } from "./EmailSentCreateNestedManyWithoutEmailTemplatesInput";

export type EmailTemplateCreateInput = {
  name: string;
  languageCode: string;
  mjml?: string | null;
  hbs: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  emailSent?: EmailSentCreateNestedManyWithoutEmailTemplatesInput;
};
