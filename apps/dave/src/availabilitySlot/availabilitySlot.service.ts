import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AvailabilitySlotServiceBase } from "./base/availabilitySlot.service.base";

@Injectable()
export class AvailabilitySlotService extends AvailabilitySlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
