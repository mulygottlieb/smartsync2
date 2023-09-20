import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductVariantPriceServiceBase } from "./base/productVariantPrice.service.base";

@Injectable()
export class ProductVariantPriceService extends ProductVariantPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
