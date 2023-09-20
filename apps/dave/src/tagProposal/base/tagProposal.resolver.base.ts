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
import { CreateTagProposalArgs } from "./CreateTagProposalArgs";
import { UpdateTagProposalArgs } from "./UpdateTagProposalArgs";
import { DeleteTagProposalArgs } from "./DeleteTagProposalArgs";
import { TagProposalCountArgs } from "./TagProposalCountArgs";
import { TagProposalFindManyArgs } from "./TagProposalFindManyArgs";
import { TagProposalFindUniqueArgs } from "./TagProposalFindUniqueArgs";
import { TagProposal } from "./TagProposal";
import { Proposal } from "../../proposal/base/Proposal";
import { Tag } from "../../tag/base/Tag";
import { TagProposalService } from "../tagProposal.service";
@graphql.Resolver(() => TagProposal)
export class TagProposalResolverBase {
  constructor(protected readonly service: TagProposalService) {}

  async _tagProposalsMeta(
    @graphql.Args() args: TagProposalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TagProposal])
  async tagProposals(
    @graphql.Args() args: TagProposalFindManyArgs
  ): Promise<TagProposal[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => TagProposal, { nullable: true })
  async tagProposal(
    @graphql.Args() args: TagProposalFindUniqueArgs
  ): Promise<TagProposal | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TagProposal)
  async createTagProposal(
    @graphql.Args() args: CreateTagProposalArgs
  ): Promise<TagProposal> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        proposal: {
          connect: args.data.proposal,
        },

        tag: {
          connect: args.data.tag,
        },
      },
    });
  }

  @graphql.Mutation(() => TagProposal)
  async updateTagProposal(
    @graphql.Args() args: UpdateTagProposalArgs
  ): Promise<TagProposal | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          proposal: {
            connect: args.data.proposal,
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

  @graphql.Mutation(() => TagProposal)
  async deleteTagProposal(
    @graphql.Args() args: DeleteTagProposalArgs
  ): Promise<TagProposal | null> {
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

  @graphql.ResolveField(() => Proposal, {
    nullable: true,
    name: "proposal",
  })
  async resolveFieldProposal(
    @graphql.Parent() parent: TagProposal
  ): Promise<Proposal | null> {
    const result = await this.service.getProposal(parent.id);

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
    @graphql.Parent() parent: TagProposal
  ): Promise<Tag | null> {
    const result = await this.service.getTag(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
