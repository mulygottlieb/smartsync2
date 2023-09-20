import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailSentServiceBase } from "./base/emailSent.service.base";

@Injectable()
export class EmailSentService extends EmailSentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
