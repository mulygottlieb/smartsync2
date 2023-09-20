import { Module } from "@nestjs/common";
import { EquipmentSharesTeamModuleBase } from "./base/equipmentSharesTeam.module.base";
import { EquipmentSharesTeamService } from "./equipmentSharesTeam.service";
import { EquipmentSharesTeamController } from "./equipmentSharesTeam.controller";
import { EquipmentSharesTeamResolver } from "./equipmentSharesTeam.resolver";

@Module({
  imports: [EquipmentSharesTeamModuleBase],
  controllers: [EquipmentSharesTeamController],
  providers: [EquipmentSharesTeamService, EquipmentSharesTeamResolver],
  exports: [EquipmentSharesTeamService],
})
export class EquipmentSharesTeamModule {}
