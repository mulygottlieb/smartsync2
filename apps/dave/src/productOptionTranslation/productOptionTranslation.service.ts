import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOptionTranslationServiceBase } from "./base/productOptionTranslation.service.base";

@Injectable()
export class ProductOptionTranslationService extends ProductOptionTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
