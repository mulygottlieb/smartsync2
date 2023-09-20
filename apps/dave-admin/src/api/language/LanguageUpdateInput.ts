import { OrganizationLanguageUpdateManyWithoutLanguagesInput } from "./OrganizationLanguageUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  organizationLanguage?: OrganizationLanguageUpdateManyWithoutLanguagesInput;
  name?: string;
  code?: string | null;
  isSystem?: boolean | null;
  description?: string | null;
  color?: string;
};
