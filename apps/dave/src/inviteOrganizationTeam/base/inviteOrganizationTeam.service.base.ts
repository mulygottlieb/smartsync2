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
  InviteOrganizationTeam,
  Invite,
  OrganizationTeam,
} from "@prisma/client";

export class InviteOrganizationTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InviteOrganizationTeamCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamCountArgs>
  ): Promise<number> {
    return this.prisma.inviteOrganizationTeam.count(args);
  }

  async findMany<T extends Prisma.InviteOrganizationTeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamFindManyArgs>
  ): Promise<InviteOrganizationTeam[]> {
    return this.prisma.inviteOrganizationTeam.findMany(args);
  }
  async findOne<T extends Prisma.InviteOrganizationTeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamFindUniqueArgs>
  ): Promise<InviteOrganizationTeam | null> {
    return this.prisma.inviteOrganizationTeam.findUnique(args);
  }
  async create<T extends Prisma.InviteOrganizationTeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamCreateArgs>
  ): Promise<InviteOrganizationTeam> {
    return this.prisma.inviteOrganizationTeam.create<T>(args);
  }
  async update<T extends Prisma.InviteOrganizationTeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamUpdateArgs>
  ): Promise<InviteOrganizationTeam> {
    return this.prisma.inviteOrganizationTeam.update<T>(args);
  }
  async delete<T extends Prisma.InviteOrganizationTeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteOrganizationTeamDeleteArgs>
  ): Promise<InviteOrganizationTeam> {
    return this.prisma.inviteOrganizationTeam.delete(args);
  }

  async getInvite(parentId: string): Promise<Invite | null> {
    return this.prisma.inviteOrganizationTeam
      .findUnique({
        where: { id: parentId },
      })
      .invite();
  }

  async getOrganizationTeam(
    parentId: string
  ): Promise<OrganizationTeam | null> {
    return this.prisma.inviteOrganizationTeam
      .findUnique({
        where: { id: parentId },
      })
      .organizationTeam();
  }
}