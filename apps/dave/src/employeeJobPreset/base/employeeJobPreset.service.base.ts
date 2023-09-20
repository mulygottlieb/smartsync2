/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmployeeJobPreset, Employee, JobPreset } from "@prisma/client";

export class EmployeeJobPresetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeJobPresetCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetCountArgs>
  ): Promise<number> {
    return this.prisma.employeeJobPreset.count(args);
  }

  async findMany<T extends Prisma.EmployeeJobPresetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetFindManyArgs>
  ): Promise<EmployeeJobPreset[]> {
    return this.prisma.employeeJobPreset.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeJobPresetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetFindUniqueArgs>
  ): Promise<EmployeeJobPreset | null> {
    return this.prisma.employeeJobPreset.findUnique(args);
  }
  async create<T extends Prisma.EmployeeJobPresetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetCreateArgs>
  ): Promise<EmployeeJobPreset> {
    return this.prisma.employeeJobPreset.create<T>(args);
  }
  async update<T extends Prisma.EmployeeJobPresetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetUpdateArgs>
  ): Promise<EmployeeJobPreset> {
    return this.prisma.employeeJobPreset.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeJobPresetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeJobPresetDeleteArgs>
  ): Promise<EmployeeJobPreset> {
    return this.prisma.employeeJobPreset.delete(args);
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.employeeJobPreset
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getJobPreset(parentId: string): Promise<JobPreset | null> {
    return this.prisma.employeeJobPreset
      .findUnique({
        where: { id: parentId },
      })
      .jobPreset();
  }
}
