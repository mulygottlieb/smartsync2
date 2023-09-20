import * as graphql from "@nestjs/graphql";
import { TagEquipmentResolverBase } from "./base/tagEquipment.resolver.base";
import { TagEquipment } from "./base/TagEquipment";
import { TagEquipmentService } from "./tagEquipment.service";

@graphql.Resolver(() => TagEquipment)
export class TagEquipmentResolver extends TagEquipmentResolverBase {
  constructor(protected readonly service: TagEquipmentService) {
    super(service);
  }
}
