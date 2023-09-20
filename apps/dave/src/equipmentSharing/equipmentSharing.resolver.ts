import * as graphql from "@nestjs/graphql";
import { EquipmentSharingResolverBase } from "./base/equipmentSharing.resolver.base";
import { EquipmentSharing } from "./base/EquipmentSharing";
import { EquipmentSharingService } from "./equipmentSharing.service";

@graphql.Resolver(() => EquipmentSharing)
export class EquipmentSharingResolver extends EquipmentSharingResolverBase {
  constructor(protected readonly service: EquipmentSharingService) {
    super(service);
  }
}
