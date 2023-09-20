/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  InviteOrganizationContact,
  Invite,
  OrganizationContact,
} from "@prisma/client";

export class InviteOrganizationContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InviteOrganizationContactCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactCountArgs>
  ): Promise<number> {
    return this.prisma.inviteOrganizationContact.count(args);
  }

  async findMany<T extends Prisma.InviteOrganizationContactFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactFindManyArgs>
  ): Promise<InviteOrganizationContact[]> {
    return this.prisma.inviteOrganizationContact.findMany(args);
  }
  async findOne<T extends Prisma.InviteOrganizationContactFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactFindUniqueArgs>
  ): Promise<InviteOrganizationContact | null> {
    return this.prisma.inviteOrganizationContact.findUnique(args);
  }
  async create<T extends Prisma.InviteOrganizationContactCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactCreateArgs>
  ): Promise<InviteOrganizationContact> {
    return this.prisma.inviteOrganizationContact.create<T>(args);
  }
  async update<T extends Prisma.InviteOrganizationContactUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactUpdateArgs>
  ): Promise<InviteOrganizationContact> {
    return this.prisma.inviteOrganizationContact.update<T>(args);
  }
  async delete<T extends Prisma.InviteOrganizationContactDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationContactDeleteArgs>
  ): Promise<InviteOrganizationContact> {
    return this.prisma.inviteOrganizationContact.delete(args);
  }

  async getInvite(parentId: string): Promise<Invite | null> {
    return this.prisma.inviteOrganizationContact
      .findUnique({
        where: { id: parentId },
      })
      .invite();
  }

  async getOrganizationContact(
    parentId: string
  ): Promise<OrganizationContact | null> {
    return this.prisma.inviteOrganizationContact
      .findUnique({
        where: { id: parentId },
      })
      .organizationContact();
  }
}