import { Language } from "../language/Language";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type OrganizationLanguage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  level: string;
  language?: Language;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
