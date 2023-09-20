import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeSlotTimeLogServiceBase } from "./base/timeSlotTimeLog.service.base";

@Injectable()
export class TimeSlotTimeLogService extends TimeSlotTimeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
