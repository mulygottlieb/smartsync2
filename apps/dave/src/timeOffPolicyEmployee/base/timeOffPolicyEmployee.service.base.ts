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
  TimeOffPolicyEmployee,
  TimeOffPolicy,
  Employee,
} from "@prisma/client";

export class TimeOffPolicyEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TimeOffPolicyEmployeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeCountArgs>
  ): Promise<number> {
    return this.prisma.timeOffPolicyEmployee.count(args);
  }

  async findMany<T extends Prisma.TimeOffPolicyEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeFindManyArgs>
  ): Promise<TimeOffPolicyEmployee[]> {
    return this.prisma.timeOffPolicyEmployee.findMany(args);
  }
  async findOne<T extends Prisma.TimeOffPolicyEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeFindUniqueArgs>
  ): Promise<TimeOffPolicyEmployee | null> {
    return this.prisma.timeOffPolicyEmployee.findUnique(args);
  }
  async create<T extends Prisma.TimeOffPolicyEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeCreateArgs>
  ): Promise<TimeOffPolicyEmployee> {
    return this.prisma.timeOffPolicyEmployee.create<T>(args);
  }
  async update<T extends Prisma.TimeOffPolicyEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeUpdateArgs>
  ): Promise<TimeOffPolicyEmployee> {
    return this.prisma.timeOffPolicyEmployee.update<T>(args);
  }
  async delete<T extends Prisma.TimeOffPolicyEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeOffPolicyEmployeeDeleteArgs>
  ): Promise<TimeOffPolicyEmployee> {
    return this.prisma.timeOffPolicyEmployee.delete(args);
  }

  async getTimeOffPolicy(parentId: string): Promise<TimeOffPolicy | null> {
    return this.prisma.timeOffPolicyEmployee
      .findUnique({
        where: { id: parentId },
      })
      .timeOffPolicy();
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.timeOffPolicyEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
