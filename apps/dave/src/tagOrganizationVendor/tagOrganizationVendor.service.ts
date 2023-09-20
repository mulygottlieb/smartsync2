import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationVendorServiceBase } from "./base/tagOrganizationVendor.service.base";

@Injectable()
export class TagOrganizationVendorService extends TagOrganizationVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
