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
import { CreateSkillOrganizationArgs } from "./CreateSkillOrganizationArgs";
import { UpdateSkillOrganizationArgs } from "./UpdateSkillOrganizationArgs";
import { DeleteSkillOrganizationArgs } from "./DeleteSkillOrganizationArgs";
import { SkillOrganizationCountArgs } from "./SkillOrganizationCountArgs";
import { SkillOrganizationFindManyArgs } from "./SkillOrganizationFindManyArgs";
import { SkillOrganizationFindUniqueArgs } from "./SkillOrganizationFindUniqueArgs";
import { SkillOrganization } from "./SkillOrganization";
import { Skill } from "../../skill/base/Skill";
import { Organization } from "../../organization/base/Organization";
import { SkillOrganizationService } from "../skillOrganization.service";
@graphql.Resolver(() => SkillOrganization)
export class SkillOrganizationResolverBase {
  constructor(protected readonly service: SkillOrganizationService) {}

  async _skillOrganizationsMeta(
    @graphql.Args() args: SkillOrganizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SkillOrganization])
  async skillOrganizations(
    @graphql.Args() args: SkillOrganizationFindManyArgs
  ): Promise<SkillOrganization[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => SkillOrganization, { nullable: true })
  async skillOrganization(
    @graphql.Args() args: SkillOrganizationFindUniqueArgs
  ): Promise<SkillOrganization | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SkillOrganization)
  async createSkillOrganization(
    @graphql.Args() args: CreateSkillOrganizationArgs
  ): Promise<SkillOrganization> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        skill: {
          connect: args.data.skill,
        },

        organization: {
          connect: args.data.organization,
        },
      },
    });
  }

  @graphql.Mutation(() => SkillOrganization)
  async updateSkillOrganization(
    @graphql.Args() args: UpdateSkillOrganizationArgs
  ): Promise<SkillOrganization | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          skill: {
            connect: args.data.skill,
          },

          organization: {
            connect: args.data.organization,
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

  @graphql.Mutation(() => SkillOrganization)
  async deleteSkillOrganization(
    @graphql.Args() args: DeleteSkillOrganizationArgs
  ): Promise<SkillOrganization | null> {
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

  @graphql.ResolveField(() => Skill, {
    nullable: true,
    name: "skill",
  })
  async resolveFieldSkill(
    @graphql.Parent() parent: SkillOrganization
  ): Promise<Skill | null> {
    const result = await this.service.getSkill(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: SkillOrganization
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
