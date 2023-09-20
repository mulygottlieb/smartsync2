import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeSlotMinuteServiceBase } from "./base/timeSlotMinute.service.base";

@Injectable()
export class TimeSlotMinuteService extends TimeSlotMinuteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
