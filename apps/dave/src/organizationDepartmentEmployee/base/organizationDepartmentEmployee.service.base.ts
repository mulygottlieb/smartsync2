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
  OrganizationDepartmentEmployee,
  Employee,
  OrganizationDepartment,
} from "@prisma/client";

export class OrganizationDepartmentEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationDepartmentEmployeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationDepartmentEmployeeCountArgs>
  ): Promise<number> {
    return this.prisma.organizationDepartmentEmployee.count(args);
  }

  async findMany<T extends Prisma.OrganizationDepartmentEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationDepartmentEmployeeFindManyArgs
    >
  ): Promise<OrganizationDepartmentEmployee[]> {
    return this.prisma.organizationDepartmentEmployee.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationDepartmentEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationDepartmentEmployeeFindUniqueArgs
    >
  ): Promise<OrganizationDepartmentEmployee | null> {
    return this.prisma.organizationDepartmentEmployee.findUnique(args);
  }
  async create<T extends Prisma.OrganizationDepartmentEmployeeCreateArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationDepartmentEmployeeCreateArgs
    >
  ): Promise<OrganizationDepartmentEmployee> {
    return this.prisma.organizationDepartmentEmployee.create<T>(args);
  }
  async update<T extends Prisma.OrganizationDepartmentEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationDepartmentEmployeeUpdateArgs
    >
  ): Promise<OrganizationDepartmentEmployee> {
    return this.prisma.organizationDepartmentEmployee.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationDepartmentEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationDepartmentEmployeeDeleteArgs
    >
  ): Promise<OrganizationDepartmentEmployee> {
    return this.prisma.organizationDepartmentEmployee.delete(args);
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.organizationDepartmentEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getOrganizationDepartment(
    parentId: string
  ): Promise<OrganizationDepartment | null> {
    return this.prisma.organizationDepartmentEmployee
      .findUnique({
        where: { id: parentId },
      })
      .organizationDepartment();
  }
}
