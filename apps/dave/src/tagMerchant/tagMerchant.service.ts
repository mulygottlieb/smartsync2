import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagMerchantServiceBase } from "./base/tagMerchant.service.base";

@Injectable()
export class TagMerchantService extends TagMerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
