import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOptionGroupTranslationServiceBase } from "./base/productOptionGroupTranslation.service.base";

@Injectable()
export class ProductOptionGroupTranslationService extends ProductOptionGroupTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
