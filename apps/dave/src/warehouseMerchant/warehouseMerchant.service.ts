import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarehouseMerchantServiceBase } from "./base/warehouseMerchant.service.base";

@Injectable()
export class WarehouseMerchantService extends WarehouseMerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
