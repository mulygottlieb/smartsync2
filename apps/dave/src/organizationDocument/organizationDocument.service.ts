import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationDocumentServiceBase } from "./base/organizationDocument.service.base";

@Injectable()
export class OrganizationDocumentService extends OrganizationDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
