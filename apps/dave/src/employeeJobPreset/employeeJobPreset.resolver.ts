import * as graphql from "@nestjs/graphql";
import { EmployeeJobPresetResolverBase } from "./base/employeeJobPreset.resolver.base";
import { EmployeeJobPreset } from "./base/EmployeeJobPreset";
import { EmployeeJobPresetService } from "./employeeJobPreset.service";

@graphql.Resolver(() => EmployeeJobPreset)
export class EmployeeJobPresetResolver extends EmployeeJobPresetResolverBase {
  constructor(protected readonly service: EmployeeJobPresetService) {
    super(service);
  }
}
