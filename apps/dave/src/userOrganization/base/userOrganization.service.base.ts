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
  UserOrganization,
  User,
  Tenant,
  Organization,
} from "@prisma/client";

export class UserOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserOrganizationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationCountArgs>
  ): Promise<number> {
    return this.prisma.userOrganization.count(args);
  }

  async findMany<T extends Prisma.UserOrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationFindManyArgs>
  ): Promise<UserOrganization[]> {
    return this.prisma.userOrganization.findMany(args);
  }
  async findOne<T extends Prisma.UserOrganizationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationFindUniqueArgs>
  ): Promise<UserOrganization | null> {
    return this.prisma.userOrganization.findUnique(args);
  }
  async create<T extends Prisma.UserOrganizationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationCreateArgs>
  ): Promise<UserOrganization> {
    return this.prisma.userOrganization.create<T>(args);
  }
  async update<T extends Prisma.UserOrganizationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationUpdateArgs>
  ): Promise<UserOrganization> {
    return this.prisma.userOrganization.update<T>(args);
  }
  async delete<T extends Prisma.UserOrganizationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserOrganizationDeleteArgs>
  ): Promise<UserOrganization> {
    return this.prisma.userOrganization.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.userOrganization
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.userOrganization
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.userOrganization
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}