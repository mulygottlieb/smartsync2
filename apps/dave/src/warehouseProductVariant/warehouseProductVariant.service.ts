import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarehouseProductVariantServiceBase } from "./base/warehouseProductVariant.service.base";

@Injectable()
export class WarehouseProductVariantService extends WarehouseProductVariantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
