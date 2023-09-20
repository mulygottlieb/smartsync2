import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomSmtpServiceBase } from "./base/customSmtp.service.base";

@Injectable()
export class CustomSmtpService extends CustomSmtpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
