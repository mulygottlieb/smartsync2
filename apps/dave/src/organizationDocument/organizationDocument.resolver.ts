import * as graphql from "@nestjs/graphql";
import { OrganizationDocumentResolverBase } from "./base/organizationDocument.resolver.base";
import { OrganizationDocument } from "./base/OrganizationDocument";
import { OrganizationDocumentService } from "./organizationDocument.service";

@graphql.Resolver(() => OrganizationDocument)
export class OrganizationDocumentResolver extends OrganizationDocumentResolverBase {
  constructor(protected readonly service: OrganizationDocumentService) {
    super(service);
  }
}
