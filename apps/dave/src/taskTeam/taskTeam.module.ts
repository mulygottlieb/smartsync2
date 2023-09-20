import { Module } from "@nestjs/common";
import { TaskTeamModuleBase } from "./base/taskTeam.module.base";
import { TaskTeamService } from "./taskTeam.service";
import { TaskTeamController } from "./taskTeam.controller";
import { TaskTeamResolver } from "./taskTeam.resolver";

@Module({
  imports: [TaskTeamModuleBase],
  controllers: [TaskTeamController],
  providers: [TaskTeamService, TaskTeamResolver],
  exports: [TaskTeamService],
})
export class TaskTeamModule {}
