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
  OrganizationTaskSetting,
  OrganizationProject,
  OrganizationTeam,
  Tenant,
  Organization,
} from "@prisma/client";

export class OrganizationTaskSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationTaskSettingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingCountArgs>
  ): Promise<number> {
    return this.prisma.organizationTaskSetting.count(args);
  }

  async findMany<T extends Prisma.OrganizationTaskSettingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingFindManyArgs>
  ): Promise<OrganizationTaskSetting[]> {
    return this.prisma.organizationTaskSetting.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationTaskSettingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingFindUniqueArgs>
  ): Promise<OrganizationTaskSetting | null> {
    return this.prisma.organizationTaskSetting.findUnique(args);
  }
  async create<T extends Prisma.OrganizationTaskSettingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingCreateArgs>
  ): Promise<OrganizationTaskSetting> {
    return this.prisma.organizationTaskSetting.create<T>(args);
  }
  async update<T extends Prisma.OrganizationTaskSettingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingUpdateArgs>
  ): Promise<OrganizationTaskSetting> {
    return this.prisma.organizationTaskSetting.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationTaskSettingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationTaskSettingDeleteArgs>
  ): Promise<OrganizationTaskSetting> {
    return this.prisma.organizationTaskSetting.delete(args);
  }

  async getOrganizationProject(
    parentId: string
  ): Promise<OrganizationProject | null> {
    return this.prisma.organizationTaskSetting
      .findUnique({
        where: { id: parentId },
      })
      .organizationProject();
  }

  async getOrganizationTeam(
    parentId: string
  ): Promise<OrganizationTeam | null> {
    return this.prisma.organizationTaskSetting
      .findUnique({
        where: { id: parentId },
      })
      .organizationTeam();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.organizationTaskSetting
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.organizationTaskSetting
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
