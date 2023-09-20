import { OrganizationLanguageCreateNestedManyWithoutLanguagesInput } from "./OrganizationLanguageCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  organizationLanguage?: OrganizationLanguageCreateNestedManyWithoutLanguagesInput;
  name: string;
  code?: string | null;
  isSystem?: boolean | null;
  description?: string | null;
  color: string;
};
