import { OrganizationLanguage } from "../organizationLanguage/OrganizationLanguage";

export type Language = {
  organizationLanguage?: Array<OrganizationLanguage>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string | null;
  isSystem: boolean | null;
  description: string | null;
  color: string;
};
