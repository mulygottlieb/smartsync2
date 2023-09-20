import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationDocumentService } from "./organizationDocument.service";
import { OrganizationDocumentControllerBase } from "./base/organizationDocument.controller.base";

@swagger.ApiTags("organizationDocuments")
@common.Controller("organizationDocuments")
export class OrganizationDocumentController extends OrganizationDocumentControllerBase {
  constructor(protected readonly service: OrganizationDocumentService) {
    super(service);
  }
}
