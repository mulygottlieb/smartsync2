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
import { CreateTagEventTypeArgs } from "./CreateTagEventTypeArgs";
import { UpdateTagEventTypeArgs } from "./UpdateTagEventTypeArgs";
import { DeleteTagEventTypeArgs } from "./DeleteTagEventTypeArgs";
import { TagEventTypeCountArgs } from "./TagEventTypeCountArgs";
import { TagEventTypeFindManyArgs } from "./TagEventTypeFindManyArgs";
import { TagEventTypeFindUniqueArgs } from "./TagEventTypeFindUniqueArgs";
import { TagEventType } from "./TagEventType";
import { EventType } from "../../eventType/base/EventType";
import { Tag } from "../../tag/base/Tag";
import { TagEventTypeService } from "../tagEventType.service";
@graphql.Resolver(() => TagEventType)
export class TagEventTypeResolverBase {
  constructor(protected readonly service: TagEventTypeService) {}

  async _tagEventTypesMeta(
    @graphql.Args() args: TagEventTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TagEventType])
  async tagEventTypes(
    @graphql.Args() args: TagEventTypeFindManyArgs
  ): Promise<TagEventType[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => TagEventType, { nullable: true })
  async tagEventType(
    @graphql.Args() args: TagEventTypeFindUniqueArgs
  ): Promise<TagEventType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TagEventType)
  async createTagEventType(
    @graphql.Args() args: CreateTagEventTypeArgs
  ): Promise<TagEventType> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        eventType: {
          connect: args.data.eventType,
        },

        tag: {
          connect: args.data.tag,
        },
      },
    });
  }

  @graphql.Mutation(() => TagEventType)
  async updateTagEventType(
    @graphql.Args() args: UpdateTagEventTypeArgs
  ): Promise<TagEventType | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          eventType: {
            connect: args.data.eventType,
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

  @graphql.Mutation(() => TagEventType)
  async deleteTagEventType(
    @graphql.Args() args: DeleteTagEventTypeArgs
  ): Promise<TagEventType | null> {
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

  @graphql.ResolveField(() => EventType, {
    nullable: true,
    name: "eventType",
  })
  async resolveFieldEventType(
    @graphql.Parent() parent: TagEventType
  ): Promise<EventType | null> {
    const result = await this.service.getEventType(parent.id);

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
    @graphql.Parent() parent: TagEventType
  ): Promise<Tag | null> {
    const result = await this.service.getTag(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}