import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyResultTemplateServiceBase } from "./base/keyResultTemplate.service.base";

@Injectable()
export class KeyResultTemplateService extends KeyResultTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
