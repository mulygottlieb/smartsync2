import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagProductServiceBase } from "./base/tagProduct.service.base";

@Injectable()
export class TagProductService extends TagProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
