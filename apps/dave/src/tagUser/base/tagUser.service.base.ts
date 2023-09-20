/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TagUser, User, Tag } from "@prisma/client";

export class TagUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagUserCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserCountArgs>
  ): Promise<number> {
    return this.prisma.tagUser.count(args);
  }

  async findMany<T extends Prisma.TagUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserFindManyArgs>
  ): Promise<TagUser[]> {
    return this.prisma.tagUser.findMany(args);
  }
  async findOne<T extends Prisma.TagUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserFindUniqueArgs>
  ): Promise<TagUser | null> {
    return this.prisma.tagUser.findUnique(args);
  }
  async create<T extends Prisma.TagUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserCreateArgs>
  ): Promise<TagUser> {
    return this.prisma.tagUser.create<T>(args);
  }
  async update<T extends Prisma.TagUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserUpdateArgs>
  ): Promise<TagUser> {
    return this.prisma.tagUser.update<T>(args);
  }
  async delete<T extends Prisma.TagUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUserDeleteArgs>
  ): Promise<TagUser> {
    return this.prisma.tagUser.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.tagUser
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getTag(parentId: string): Promise<Tag | null> {
    return this.prisma.tagUser
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }
}