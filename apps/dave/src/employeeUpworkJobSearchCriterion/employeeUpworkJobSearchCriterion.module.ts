import { Module } from "@nestjs/common";
import { EmployeeUpworkJobSearchCriterionModuleBase } from "./base/employeeUpworkJobSearchCriterion.module.base";
import { EmployeeUpworkJobSearchCriterionService } from "./employeeUpworkJobSearchCriterion.service";
import { EmployeeUpworkJobSearchCriterionController } from "./employeeUpworkJobSearchCriterion.controller";
import { EmployeeUpworkJobSearchCriterionResolver } from "./employeeUpworkJobSearchCriterion.resolver";

@Module({
  imports: [EmployeeUpworkJobSearchCriterionModuleBase],
  controllers: [EmployeeUpworkJobSearchCriterionController],
  providers: [
    EmployeeUpworkJobSearchCriterionService,
    EmployeeUpworkJobSearchCriterionResolver,
  ],
  exports: [EmployeeUpworkJobSearchCriterionService],
})
export class EmployeeUpworkJobSearchCriterionModule {}
