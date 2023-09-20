import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarehouseProductServiceBase } from "./base/warehouseProduct.service.base";

@Injectable()
export class WarehouseProductService extends WarehouseProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
