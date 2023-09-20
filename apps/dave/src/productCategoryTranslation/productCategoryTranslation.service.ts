import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCategoryTranslationServiceBase } from "./base/productCategoryTranslation.service.base";

@Injectable()
export class ProductCategoryTranslationService extends ProductCategoryTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
