import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyResultUpdateServiceBase } from "./base/keyResultUpdate.service.base";

@Injectable()
export class KeyResultUpdateService extends KeyResultUpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
