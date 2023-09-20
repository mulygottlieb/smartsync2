import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductVariantSettingServiceBase } from "./base/productVariantSetting.service.base";

@Injectable()
export class ProductVariantSettingService extends ProductVariantSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
