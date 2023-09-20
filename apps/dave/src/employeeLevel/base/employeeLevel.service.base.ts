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
  EmployeeLevel,
  TagEmployeeLevel,
  Organization,
  Tenant,
} from "@prisma/client";

export class EmployeeLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeLevelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelCountArgs>
  ): Promise<number> {
    return this.prisma.employeeLevel.count(args);
  }

  async findMany<T extends Prisma.EmployeeLevelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelFindManyArgs>
  ): Promise<EmployeeLevel[]> {
    return this.prisma.employeeLevel.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeLevelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelFindUniqueArgs>
  ): Promise<EmployeeLevel | null> {
    return this.prisma.employeeLevel.findUnique(args);
  }
  async create<T extends Prisma.EmployeeLevelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelCreateArgs>
  ): Promise<EmployeeLevel> {
    return this.prisma.employeeLevel.create<T>(args);
  }
  async update<T extends Prisma.EmployeeLevelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelUpdateArgs>
  ): Promise<EmployeeLevel> {
    return this.prisma.employeeLevel.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeLevelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeLevelDeleteArgs>
  ): Promise<EmployeeLevel> {
    return this.prisma.employeeLevel.delete(args);
  }

  async findTagEmployeeLevel(
    parentId: string,
    args: Prisma.TagEmployeeLevelFindManyArgs
  ): Promise<TagEmployeeLevel[]> {
    return this.prisma.employeeLevel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tagEmployeeLevel(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.employeeLevel
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.employeeLevel
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}