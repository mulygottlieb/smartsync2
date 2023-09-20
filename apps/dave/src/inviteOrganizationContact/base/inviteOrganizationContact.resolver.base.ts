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
import { CreateInviteOrganizationContactArgs } from "./CreateInviteOrganizationContactArgs";
import { UpdateInviteOrganizationContactArgs } from "./UpdateInviteOrganizationContactArgs";
import { DeleteInviteOrganizationContactArgs } from "./DeleteInviteOrganizationContactArgs";
import { InviteOrganizationContactCountArgs } from "./InviteOrganizationContactCountArgs";
import { InviteOrganizationContactFindManyArgs } from "./InviteOrganizationContactFindManyArgs";
import { InviteOrganizationContactFindUniqueArgs } from "./InviteOrganizationContactFindUniqueArgs";
import { InviteOrganizationContact } from "./InviteOrganizationContact";
import { Invite } from "../../invite/base/Invite";
import { OrganizationContact } from "../../organizationContact/base/OrganizationContact";
import { InviteOrganizationContactService } from "../inviteOrganizationContact.service";
@graphql.Resolver(() => InviteOrganizationContact)
export class InviteOrganizationContactResolverBase {
  constructor(protected readonly service: InviteOrganizationContactService) {}

  async _inviteOrganizationContactsMeta(
    @graphql.Args() args: InviteOrganizationContactCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [InviteOrganizationContact])
  async inviteOrganizationContacts(
    @graphql.Args() args: InviteOrganizationContactFindManyArgs
  ): Promise<InviteOrganizationContact[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => InviteOrganizationContact, { nullable: true })
  async inviteOrganizationContact(
    @graphql.Args() args: InviteOrganizationContactFindUniqueArgs
  ): Promise<InviteOrganizationContact | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InviteOrganizationContact)
  async createInviteOrganizationContact(
    @graphql.Args() args: CreateInviteOrganizationContactArgs
  ): Promise<InviteOrganizationContact> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        invite: {
          connect: args.data.invite,
        },

        organizationContact: {
          connect: args.data.organizationContact,
        },
      },
    });
  }

  @graphql.Mutation(() => InviteOrganizationContact)
  async updateInviteOrganizationContact(
    @graphql.Args() args: UpdateInviteOrganizationContactArgs
  ): Promise<InviteOrganizationContact | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          invite: {
            connect: args.data.invite,
          },

          organizationContact: {
            connect: args.data.organizationContact,
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

  @graphql.Mutation(() => InviteOrganizationContact)
  async deleteInviteOrganizationContact(
    @graphql.Args() args: DeleteInviteOrganizationContactArgs
  ): Promise<InviteOrganizationContact | null> {
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

  @graphql.ResolveField(() => Invite, {
    nullable: true,
    name: "invite",
  })
  async resolveFieldInvite(
    @graphql.Parent() parent: InviteOrganizationContact
  ): Promise<Invite | null> {
    const result = await this.service.getInvite(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrganizationContact, {
    nullable: true,
    name: "organizationContact",
  })
  async resolveFieldOrganizationContact(
    @graphql.Parent() parent: InviteOrganizationContact
  ): Promise<OrganizationContact | null> {
    const result = await this.service.getOrganizationContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}