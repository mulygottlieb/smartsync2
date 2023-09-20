import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagEquipmentServiceBase } from "./base/tagEquipment.service.base";

@Injectable()
export class TagEquipmentService extends TagEquipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
