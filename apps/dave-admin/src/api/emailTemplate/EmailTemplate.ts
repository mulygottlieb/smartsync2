import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { EmailSent } from "../emailSent/EmailSent";

export type EmailTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  languageCode: string;
  mjml: string | null;
  hbs: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  emailSent?: Array<EmailSent>;
};
