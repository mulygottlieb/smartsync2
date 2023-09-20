import { Module } from "@nestjs/common";
import { EstimateEmailModuleBase } from "./base/estimateEmail.module.base";
import { EstimateEmailService } from "./estimateEmail.service";
import { EstimateEmailController } from "./estimateEmail.controller";
import { EstimateEmailResolver } from "./estimateEmail.resolver";

@Module({
  imports: [EstimateEmailModuleBase],
  controllers: [EstimateEmailController],
  providers: [EstimateEmailService, EstimateEmailResolver],
  exports: [EstimateEmailService],
})
export class EstimateEmailModule {}
