/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TagOrganization, Organization, Tag } from "@prisma/client";

export class TagOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagOrganizationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationCountArgs>
  ): Promise<number> {
    return this.prisma.tagOrganization.count(args);
  }

  async findMany<T extends Prisma.TagOrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationFindManyArgs>
  ): Promise<TagOrganization[]> {
    return this.prisma.tagOrganization.findMany(args);
  }
  async findOne<T extends Prisma.TagOrganizationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationFindUniqueArgs>
  ): Promise<TagOrganization | null> {
    return this.prisma.tagOrganization.findUnique(args);
  }
  async create<T extends Prisma.TagOrganizationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationCreateArgs>
  ): Promise<TagOrganization> {
    return this.prisma.tagOrganization.create<T>(args);
  }
  async update<T extends Prisma.TagOrganizationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationUpdateArgs>
  ): Promise<TagOrganization> {
    return this.prisma.tagOrganization.update<T>(args);
  }
  async delete<T extends Prisma.TagOrganizationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagOrganizationDeleteArgs>
  ): Promise<TagOrganization> {
    return this.prisma.tagOrganization.delete(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.tagOrganization
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTag(parentId: string): Promise<Tag | null> {
    return this.prisma.tagOrganization
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }
}