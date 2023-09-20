import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type AccountingTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  languageCode: string;
  mjml: string | null;
  hbs: string;
  templateType: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
