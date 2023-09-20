import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentSharesTeamServiceBase } from "./base/equipmentSharesTeam.service.base";

@Injectable()
export class EquipmentSharesTeamService extends EquipmentSharesTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
