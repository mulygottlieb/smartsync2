/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateEquipmentSharesTeamArgs } from "./CreateEquipmentSharesTeamArgs";
import { UpdateEquipmentSharesTeamArgs } from "./UpdateEquipmentSharesTeamArgs";
import { DeleteEquipmentSharesTeamArgs } from "./DeleteEquipmentSharesTeamArgs";
import { EquipmentSharesTeamCountArgs } from "./EquipmentSharesTeamCountArgs";
import { EquipmentSharesTeamFindManyArgs } from "./EquipmentSharesTeamFindManyArgs";
import { EquipmentSharesTeamFindUniqueArgs } from "./EquipmentSharesTeamFindUniqueArgs";
import { EquipmentSharesTeam } from "./EquipmentSharesTeam";
import { OrganizationTeam } from "../../organizationTeam/base/OrganizationTeam";
import { EquipmentSharing } from "../../equipmentSharing/base/EquipmentSharing";
import { EquipmentSharesTeamService } from "../equipmentSharesTeam.service";
@graphql.Resolver(() => EquipmentSharesTeam)
export class EquipmentSharesTeamResolverBase {
  constructor(protected readonly service: EquipmentSharesTeamService) {}

  async _equipmentSharesTeamsMeta(
    @graphql.Args() args: EquipmentSharesTeamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EquipmentSharesTeam])
  async equipmentSharesTeams(
    @graphql.Args() args: EquipmentSharesTeamFindManyArgs
  ): Promise<EquipmentSharesTeam[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => EquipmentSharesTeam, { nullable: true })
  async equipmentSharesTeam(
    @graphql.Args() args: EquipmentSharesTeamFindUniqueArgs
  ): Promise<EquipmentSharesTeam | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EquipmentSharesTeam)
  async createEquipmentSharesTeam(
    @graphql.Args() args: CreateEquipmentSharesTeamArgs
  ): Promise<EquipmentSharesTeam> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationTeam: {
          connect: args.data.organizationTeam,
        },

        equipmentSharing: {
          connect: args.data.equipmentSharing,
        },
      },
    });
  }

  @graphql.Mutation(() => EquipmentSharesTeam)
  async updateEquipmentSharesTeam(
    @graphql.Args() args: UpdateEquipmentSharesTeamArgs
  ): Promise<EquipmentSharesTeam | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationTeam: {
            connect: args.data.organizationTeam,
          },

          equipmentSharing: {
            connect: args.data.equipmentSharing,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EquipmentSharesTeam)
  async deleteEquipmentSharesTeam(
    @graphql.Args() args: DeleteEquipmentSharesTeamArgs
  ): Promise<EquipmentSharesTeam | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => OrganizationTeam, {
    nullable: true,
    name: "organizationTeam",
  })
  async resolveFieldOrganizationTeam(
    @graphql.Parent() parent: EquipmentSharesTeam
  ): Promise<OrganizationTeam | null> {
    const result = await this.service.getOrganizationTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => EquipmentSharing, {
    nullable: true,
    name: "equipmentSharing",
  })
  async resolveFieldEquipmentSharing(
    @graphql.Parent() parent: EquipmentSharesTeam
  ): Promise<EquipmentSharing | null> {
    const result = await this.service.getEquipmentSharing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
