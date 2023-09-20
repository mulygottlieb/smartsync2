import { Module } from "@nestjs/common";
import { TagPaymentModuleBase } from "./base/tagPayment.module.base";
import { TagPaymentService } from "./tagPayment.service";
import { TagPaymentController } from "./tagPayment.controller";
import { TagPaymentResolver } from "./tagPayment.resolver";

@Module({
  imports: [TagPaymentModuleBase],
  controllers: [TagPaymentController],
  providers: [TagPaymentService, TagPaymentResolver],
  exports: [TagPaymentService],
})
export class TagPaymentModule {}
