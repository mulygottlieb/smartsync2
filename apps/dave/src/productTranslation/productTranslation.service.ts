import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductTranslationServiceBase } from "./base/productTranslation.service.base";

@Injectable()
export class ProductTranslationService extends ProductTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
