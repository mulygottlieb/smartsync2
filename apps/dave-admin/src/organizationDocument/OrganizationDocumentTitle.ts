import { OrganizationDocument as TOrganizationDocument } from "../api/organizationDocument/OrganizationDocument";

export const ORGANIZATIONDOCUMENT_TITLE_FIELD = "name";

export const OrganizationDocumentTitle = (
  record: TOrganizationDocument
): string => {
  return record.name?.toString() || String(record.id);
};
