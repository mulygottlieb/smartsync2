import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductTypeTranslationServiceBase } from "./base/productTypeTranslation.service.base";

@Injectable()
export class ProductTypeTranslationService extends ProductTypeTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
