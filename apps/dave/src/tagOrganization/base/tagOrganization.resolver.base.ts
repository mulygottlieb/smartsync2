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
import { CreateTagOrganizationArgs } from "./CreateTagOrganizationArgs";
import { UpdateTagOrganizationArgs } from "./UpdateTagOrganizationArgs";
import { DeleteTagOrganizationArgs } from "./DeleteTagOrganizationArgs";
import { TagOrganizationCountArgs } from "./TagOrganizationCountArgs";
import { TagOrganizationFindManyArgs } from "./TagOrganizationFindManyArgs";
import { TagOrganizationFindUniqueArgs } from "./TagOrganizationFindUniqueArgs";
import { TagOrganization } from "./TagOrganization";
import { Organization } from "../../organization/base/Organization";
import { Tag } from "../../tag/base/Tag";
import { TagOrganizationService } from "../tagOrganization.service";
@graphql.Resolver(() => TagOrganization)
export class TagOrganizationResolverBase {
  constructor(protected readonly service: TagOrganizationService) {}

  async _tagOrganizationsMeta(
    @graphql.Args() args: TagOrganizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TagOrganization])
  async tagOrganizations(
    @graphql.Args() args: TagOrganizationFindManyArgs
  ): Promise<TagOrganization[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => TagOrganization, { nullable: true })
  async tagOrganization(
    @graphql.Args() args: TagOrganizationFindUniqueArgs
  ): Promise<TagOrganization | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TagOrganization)
  async createTagOrganization(
    @graphql.Args() args: CreateTagOrganizationArgs
  ): Promise<TagOrganization> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: {
          connect: args.data.organization,
        },

        tag: {
          connect: args.data.tag,
        },
      },
    });
  }

  @graphql.Mutation(() => TagOrganization)
  async updateTagOrganization(
    @graphql.Args() args: UpdateTagOrganizationArgs
  ): Promise<TagOrganization | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: {
            connect: args.data.organization,
          },

          tag: {
            connect: args.data.tag,
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

  @graphql.Mutation(() => TagOrganization)
  async deleteTagOrganization(
    @graphql.Args() args: DeleteTagOrganizationArgs
  ): Promise<TagOrganization | null> {
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

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: TagOrganization
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Tag, {
    nullable: true,
    name: "tag",
  })
  async resolveFieldTag(
    @graphql.Parent() parent: TagOrganization
  ): Promise<Tag | null> {
    const result = await this.service.getTag(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
