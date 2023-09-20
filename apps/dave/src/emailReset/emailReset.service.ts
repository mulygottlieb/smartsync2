import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailResetServiceBase } from "./base/emailReset.service.base";

@Injectable()
export class EmailResetService extends EmailResetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
