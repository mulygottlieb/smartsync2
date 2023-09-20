import { OrganizationDocumentWhereInput } from "./OrganizationDocumentWhereInput";
import { OrganizationDocumentOrderByInput } from "./OrganizationDocumentOrderByInput";

export type OrganizationDocumentFindManyArgs = {
  where?: OrganizationDocumentWhereInput;
  orderBy?: Array<OrganizationDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
