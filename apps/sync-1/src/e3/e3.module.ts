import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { E3ModuleBase } from "./base/e3.module.base";
import { E3Service } from "./e3.service";
import { E3Controller } from "./e3.controller";
import { E3Resolver } from "./e3.resolver";

@Module({
  imports: [E3ModuleBase, forwardRef(() => AuthModule)],
  controllers: [E3Controller],
  providers: [E3Service, E3Resolver],
  exports: [E3Service],
})
export class E3Module {}
