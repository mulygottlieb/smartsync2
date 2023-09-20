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
import { CreateTagRequestApprovalArgs } from "./CreateTagRequestApprovalArgs";
import { UpdateTagRequestApprovalArgs } from "./UpdateTagRequestApprovalArgs";
import { DeleteTagRequestApprovalArgs } from "./DeleteTagRequestApprovalArgs";
import { TagRequestApprovalCountArgs } from "./TagRequestApprovalCountArgs";
import { TagRequestApprovalFindManyArgs } from "./TagRequestApprovalFindManyArgs";
import { TagRequestApprovalFindUniqueArgs } from "./TagRequestApprovalFindUniqueArgs";
import { TagRequestApproval } from "./TagRequestApproval";
import { Tag } from "../../tag/base/Tag";
import { RequestApproval } from "../../requestApproval/base/RequestApproval";
import { TagRequestApprovalService } from "../tagRequestApproval.service";
@graphql.Resolver(() => TagRequestApproval)
export class TagRequestApprovalResolverBase {
  constructor(protected readonly service: TagRequestApprovalService) {}

  async _tagRequestApprovalsMeta(
    @graphql.Args() args: TagRequestApprovalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TagRequestApproval])
  async tagRequestApprovals(
    @graphql.Args() args: TagRequestApprovalFindManyArgs
  ): Promise<TagRequestApproval[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => TagRequestApproval, { nullable: true })
  async tagRequestApproval(
    @graphql.Args() args: TagRequestApprovalFindUniqueArgs
  ): Promise<TagRequestApproval | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TagRequestApproval)
  async createTagRequestApproval(
    @graphql.Args() args: CreateTagRequestApprovalArgs
  ): Promise<TagRequestApproval> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tag: {
          connect: args.data.tag,
        },

        requestApproval: {
          connect: args.data.requestApproval,
        },
      },
    });
  }

  @graphql.Mutation(() => TagRequestApproval)
  async updateTagRequestApproval(
    @graphql.Args() args: UpdateTagRequestApprovalArgs
  ): Promise<TagRequestApproval | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tag: {
            connect: args.data.tag,
          },

          requestApproval: {
            connect: args.data.requestApproval,
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

  @graphql.Mutation(() => TagRequestApproval)
  async deleteTagRequestApproval(
    @graphql.Args() args: DeleteTagRequestApprovalArgs
  ): Promise<TagRequestApproval | null> {
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

  @graphql.ResolveField(() => Tag, {
    nullable: true,
    name: "tag",
  })
  async resolveFieldTag(
    @graphql.Parent() parent: TagRequestApproval
  ): Promise<Tag | null> {
    const result = await this.service.getTag(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => RequestApproval, {
    nullable: true,
    name: "requestApproval",
  })
  async resolveFieldRequestApproval(
    @graphql.Parent() parent: TagRequestApproval
  ): Promise<RequestApproval | null> {
    const result = await this.service.getRequestApproval(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
