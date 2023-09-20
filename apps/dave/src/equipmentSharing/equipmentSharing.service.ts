import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentSharingServiceBase } from "./base/equipmentSharing.service.base";

@Injectable()
export class EquipmentSharingService extends EquipmentSharingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
