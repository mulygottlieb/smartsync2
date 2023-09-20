import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeLogServiceBase } from "./base/timeLog.service.base";

@Injectable()
export class TimeLogService extends TimeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
