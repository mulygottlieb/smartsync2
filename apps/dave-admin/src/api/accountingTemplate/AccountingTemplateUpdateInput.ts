import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountingTemplateUpdateInput = {
  name?: string;
  languageCode?: string;
  mjml?: string | null;
  hbs?: string;
  templateType?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
