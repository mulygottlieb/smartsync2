import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOptionServiceBase } from "./base/productOption.service.base";

@Injectable()
export class ProductOptionService extends ProductOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
