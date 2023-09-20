import * as graphql from "@nestjs/graphql";
import { EquipmentSharingPolicyResolverBase } from "./base/equipmentSharingPolicy.resolver.base";
import { EquipmentSharingPolicy } from "./base/EquipmentSharingPolicy";
import { EquipmentSharingPolicyService } from "./equipmentSharingPolicy.service";

@graphql.Resolver(() => EquipmentSharingPolicy)
export class EquipmentSharingPolicyResolver extends EquipmentSharingPolicyResolverBase {
  constructor(protected readonly service: EquipmentSharingPolicyService) {
    super(service);
  }
}
