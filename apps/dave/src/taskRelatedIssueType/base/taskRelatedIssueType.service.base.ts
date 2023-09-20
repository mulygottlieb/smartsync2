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
  TaskRelatedIssueType,
  OrganizationTeam,
  Tenant,
  Organization,
  OrganizationProject,
} from "@prisma/client";

export class TaskRelatedIssueTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskRelatedIssueTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeCountArgs>
  ): Promise<number> {
    return this.prisma.taskRelatedIssueType.count(args);
  }

  async findMany<T extends Prisma.TaskRelatedIssueTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeFindManyArgs>
  ): Promise<TaskRelatedIssueType[]> {
    return this.prisma.taskRelatedIssueType.findMany(args);
  }
  async findOne<T extends Prisma.TaskRelatedIssueTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeFindUniqueArgs>
  ): Promise<TaskRelatedIssueType | null> {
    return this.prisma.taskRelatedIssueType.findUnique(args);
  }
  async create<T extends Prisma.TaskRelatedIssueTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeCreateArgs>
  ): Promise<TaskRelatedIssueType> {
    return this.prisma.taskRelatedIssueType.create<T>(args);
  }
  async update<T extends Prisma.TaskRelatedIssueTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeUpdateArgs>
  ): Promise<TaskRelatedIssueType> {
    return this.prisma.taskRelatedIssueType.update<T>(args);
  }
  async delete<T extends Prisma.TaskRelatedIssueTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskRelatedIssueTypeDeleteArgs>
  ): Promise<TaskRelatedIssueType> {
    return this.prisma.taskRelatedIssueType.delete(args);
  }

  async getOrganizationTeam(
    parentId: string
  ): Promise<OrganizationTeam | null> {
    return this.prisma.taskRelatedIssueType
      .findUnique({
        where: { id: parentId },
      })
      .organizationTeam();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.taskRelatedIssueType
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.taskRelatedIssueType
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getOrganizationProject(
    parentId: string
  ): Promise<OrganizationProject | null> {
    return this.prisma.taskRelatedIssueType
      .findUnique({
        where: { id: parentId },
      })
      .organizationProject();
  }
}