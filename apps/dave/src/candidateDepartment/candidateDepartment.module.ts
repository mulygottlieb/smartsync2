import { Module } from "@nestjs/common";
import { CandidateDepartmentModuleBase } from "./base/candidateDepartment.module.base";
import { CandidateDepartmentService } from "./candidateDepartment.service";
import { CandidateDepartmentController } from "./candidateDepartment.controller";
import { CandidateDepartmentResolver } from "./candidateDepartment.resolver";

@Module({
  imports: [CandidateDepartmentModuleBase],
  controllers: [CandidateDepartmentController],
  providers: [CandidateDepartmentService, CandidateDepartmentResolver],
  exports: [CandidateDepartmentService],
})
export class CandidateDepartmentModule {}
