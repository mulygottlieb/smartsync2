/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GoalTimeFrame, Organization, Tenant } from "@prisma/client";

export class GoalTimeFrameServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GoalTimeFrameCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameCountArgs>
  ): Promise<number> {
    return this.prisma.goalTimeFrame.count(args);
  }

  async findMany<T extends Prisma.GoalTimeFrameFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameFindManyArgs>
  ): Promise<GoalTimeFrame[]> {
    return this.prisma.goalTimeFrame.findMany(args);
  }
  async findOne<T extends Prisma.GoalTimeFrameFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameFindUniqueArgs>
  ): Promise<GoalTimeFrame | null> {
    return this.prisma.goalTimeFrame.findUnique(args);
  }
  async create<T extends Prisma.GoalTimeFrameCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameCreateArgs>
  ): Promise<GoalTimeFrame> {
    return this.prisma.goalTimeFrame.create<T>(args);
  }
  async update<T extends Prisma.GoalTimeFrameUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameUpdateArgs>
  ): Promise<GoalTimeFrame> {
    return this.prisma.goalTimeFrame.update<T>(args);
  }
  async delete<T extends Prisma.GoalTimeFrameDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoalTimeFrameDeleteArgs>
  ): Promise<GoalTimeFrame> {
    return this.prisma.goalTimeFrame.delete(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.goalTimeFrame
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.goalTimeFrame
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}