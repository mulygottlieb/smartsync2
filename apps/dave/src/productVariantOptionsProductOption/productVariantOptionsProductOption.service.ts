import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductVariantOptionsProductOptionServiceBase } from "./base/productVariantOptionsProductOption.service.base";

@Injectable()
export class ProductVariantOptionsProductOptionService extends ProductVariantOptionsProductOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
