import { Module } from "@nestjs/common";
import { SkillEmployeeModuleBase } from "./base/skillEmployee.module.base";
import { SkillEmployeeService } from "./skillEmployee.service";
import { SkillEmployeeController } from "./skillEmployee.controller";
import { SkillEmployeeResolver } from "./skillEmployee.resolver";

@Module({
  imports: [SkillEmployeeModuleBase],
  controllers: [SkillEmployeeController],
  providers: [SkillEmployeeService, SkillEmployeeResolver],
  exports: [SkillEmployeeService],
})
export class SkillEmployeeModule {}
