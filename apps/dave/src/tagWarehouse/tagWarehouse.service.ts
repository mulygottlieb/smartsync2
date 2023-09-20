import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagWarehouseServiceBase } from "./base/tagWarehouse.service.base";

@Injectable()
export class TagWarehouseService extends TagWarehouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
