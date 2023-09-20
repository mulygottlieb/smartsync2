import { Module } from "@nestjs/common";
import { OrganizationDocumentModuleBase } from "./base/organizationDocument.module.base";
import { OrganizationDocumentService } from "./organizationDocument.service";
import { OrganizationDocumentController } from "./organizationDocument.controller";
import { OrganizationDocumentResolver } from "./organizationDocument.resolver";

@Module({
  imports: [OrganizationDocumentModuleBase],
  controllers: [OrganizationDocumentController],
  providers: [OrganizationDocumentService, OrganizationDocumentResolver],
  exports: [OrganizationDocumentService],
})
export class OrganizationDocumentModule {}
