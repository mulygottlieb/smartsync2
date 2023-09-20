import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentSharingPolicyServiceBase } from "./base/equipmentSharingPolicy.service.base";

@Injectable()
export class EquipmentSharingPolicyService extends EquipmentSharingPolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
