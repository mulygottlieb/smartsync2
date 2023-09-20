import * as graphql from "@nestjs/graphql";
import { EquipmentSharesTeamResolverBase } from "./base/equipmentSharesTeam.resolver.base";
import { EquipmentSharesTeam } from "./base/EquipmentSharesTeam";
import { EquipmentSharesTeamService } from "./equipmentSharesTeam.service";

@graphql.Resolver(() => EquipmentSharesTeam)
export class EquipmentSharesTeamResolver extends EquipmentSharesTeamResolverBase {
  constructor(protected readonly service: EquipmentSharesTeamService) {
    super(service);
  }
}
