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
  TagOrganizationTeam,
  Tag,
  OrganizationTeam,
} from "@prisma/client";

export class TagOrganizationTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagOrganizationTeamCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamCountArgs>
  ): Promise<number> {
    return this.prisma.tagOrganizationTeam.count(args);
  }

  async findMany<T extends Prisma.TagOrganizationTeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamFindManyArgs>
  ): Promise<TagOrganizationTeam[]> {
    return this.prisma.tagOrganizationTeam.findMany(args);
  }
  async findOne<T extends Prisma.TagOrganizationTeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamFindUniqueArgs>
  ): Promise<TagOrganizationTeam | null> {
    return this.prisma.tagOrganizationTeam.findUnique(args);
  }
  async create<T extends Prisma.TagOrganizationTeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamCreateArgs>
  ): Promise<TagOrganizationTeam> {
    return this.prisma.tagOrganizationTeam.create<T>(args);
  }
  async update<T extends Prisma.TagOrganizationTeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamUpdateArgs>
  ): Promise<TagOrganizationTeam> {
    return this.prisma.tagOrganizationTeam.update<T>(args);
  }
  async delete<T extends Prisma.TagOrganizationTeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationTeamDeleteArgs>
  ): Promise<TagOrganizationTeam> {
    return this.prisma.tagOrganizationTeam.delete(args);
  }

  async getTag(parentId: string): Promise<Tag | null> {
    return this.prisma.tagOrganizationTeam
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }

  async getOrganizationTeam(
    parentId: string
  ): Promise<OrganizationTeam | null> {
    return this.prisma.tagOrganizationTeam
      .findUnique({
        where: { id: parentId },
      })
      .organizationTeam();
  }
}