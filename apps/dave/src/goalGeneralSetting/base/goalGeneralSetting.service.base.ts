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
  GoalGeneralSetting,
  Tenant,
  Organization,
} from "@prisma/client";

export class GoalGeneralSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GoalGeneralSettingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingCountArgs>
  ): Promise<number> {
    return this.prisma.goalGeneralSetting.count(args);
  }

  async findMany<T extends Prisma.GoalGeneralSettingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingFindManyArgs>
  ): Promise<GoalGeneralSetting[]> {
    return this.prisma.goalGeneralSetting.findMany(args);
  }
  async findOne<T extends Prisma.GoalGeneralSettingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingFindUniqueArgs>
  ): Promise<GoalGeneralSetting | null> {
    return this.prisma.goalGeneralSetting.findUnique(args);
  }
  async create<T extends Prisma.GoalGeneralSettingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingCreateArgs>
  ): Promise<GoalGeneralSetting> {
    return this.prisma.goalGeneralSetting.create<T>(args);
  }
  async update<T extends Prisma.GoalGeneralSettingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingUpdateArgs>
  ): Promise<GoalGeneralSetting> {
    return this.prisma.goalGeneralSetting.update<T>(args);
  }
  async delete<T extends Prisma.GoalGeneralSettingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalGeneralSettingDeleteArgs>
  ): Promise<GoalGeneralSetting> {
    return this.prisma.goalGeneralSetting.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.goalGeneralSetting
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.goalGeneralSetting
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}