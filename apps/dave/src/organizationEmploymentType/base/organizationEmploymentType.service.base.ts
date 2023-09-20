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
  OrganizationEmploymentType,
  CandidateEmploymentType,
  OrganizationEmploymentTypeEmployee,
  TagOrganizationEmploymentType,
  Tenant,
  Organization,
} from "@prisma/client";

export class OrganizationEmploymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationEmploymentTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationEmploymentTypeCountArgs>
  ): Promise<number> {
    return this.prisma.organizationEmploymentType.count(args);
  }

  async findMany<T extends Prisma.OrganizationEmploymentTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationEmploymentTypeFindManyArgs>
  ): Promise<OrganizationEmploymentType[]> {
    return this.prisma.organizationEmploymentType.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationEmploymentTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationEmploymentTypeFindUniqueArgs
    >
  ): Promise<OrganizationEmploymentType | null> {
    return this.prisma.organizationEmploymentType.findUnique(args);
  }
  async create<T extends Prisma.OrganizationEmploymentTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationEmploymentTypeCreateArgs>
  ): Promise<OrganizationEmploymentType> {
    return this.prisma.organizationEmploymentType.create<T>(args);
  }
  async update<T extends Prisma.OrganizationEmploymentTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationEmploymentTypeUpdateArgs>
  ): Promise<OrganizationEmploymentType> {
    return this.prisma.organizationEmploymentType.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationEmploymentTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationEmploymentTypeDeleteArgs>
  ): Promise<OrganizationEmploymentType> {
    return this.prisma.organizationEmploymentType.delete(args);
  }

  async findCandidateEmploymentType(
    parentId: string,
    args: Prisma.CandidateEmploymentTypeFindManyArgs
  ): Promise<CandidateEmploymentType[]> {
    return this.prisma.organizationEmploymentType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .candidateEmploymentType(args);
  }

  async findOrganizationEmploymentTypeEmployee(
    parentId: string,
    args: Prisma.OrganizationEmploymentTypeEmployeeFindManyArgs
  ): Promise<OrganizationEmploymentTypeEmployee[]> {
    return this.prisma.organizationEmploymentType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationEmploymentTypeEmployee(args);
  }

  async findTagOrganizationEmploymentType(
    parentId: string,
    args: Prisma.TagOrganizationEmploymentTypeFindManyArgs
  ): Promise<TagOrganizationEmploymentType[]> {
    return this.prisma.organizationEmploymentType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tagOrganizationEmploymentType(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.organizationEmploymentType
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.organizationEmploymentType
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
