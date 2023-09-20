import { Tenant } from "../tenant/Tenant";
import { User } from "../user/User";
import { Organization } from "../organization/Organization";
import { EmailTemplate } from "../emailTemplate/EmailTemplate";

export type EmailSent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  content: string | null;
  email: string;
  isArchived: boolean | null;
  tenant?: Tenant | null;
  user?: User | null;
  organization?: Organization | null;
  emailTemplate?: EmailTemplate;
};
