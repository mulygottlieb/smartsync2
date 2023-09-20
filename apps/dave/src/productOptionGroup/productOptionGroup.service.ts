import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOptionGroupServiceBase } from "./base/productOptionGroup.service.base";

@Injectable()
export class ProductOptionGroupService extends ProductOptionGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
