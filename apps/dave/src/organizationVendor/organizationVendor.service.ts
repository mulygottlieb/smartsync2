import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationVendorServiceBase } from "./base/organizationVendor.service.base";

@Injectable()
export class OrganizationVendorService extends OrganizationVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
