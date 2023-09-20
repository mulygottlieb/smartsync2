import * as graphql from "@nestjs/graphql";
import { EquipmentSharesEmployeeResolverBase } from "./base/equipmentSharesEmployee.resolver.base";
import { EquipmentSharesEmployee } from "./base/EquipmentSharesEmployee";
import { EquipmentSharesEmployeeService } from "./equipmentSharesEmployee.service";

@graphql.Resolver(() => EquipmentSharesEmployee)
export class EquipmentSharesEmployeeResolver extends EquipmentSharesEmployeeResolverBase {
  constructor(protected readonly service: EquipmentSharesEmployeeService) {
    super(service);
  }
}
