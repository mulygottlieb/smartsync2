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
  OrganizationContactEmployee,
  OrganizationContact,
  Employee,
} from "@prisma/client";

export class OrganizationContactEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationContactEmployeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationContactEmployeeCountArgs>
  ): Promise<number> {
    return this.prisma.organizationContactEmployee.count(args);
  }

  async findMany<T extends Prisma.OrganizationContactEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationContactEmployeeFindManyArgs>
  ): Promise<OrganizationContactEmployee[]> {
    return this.prisma.organizationContactEmployee.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationContactEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationContactEmployeeFindUniqueArgs
    >
  ): Promise<OrganizationContactEmployee | null> {
    return this.prisma.organizationContactEmployee.findUnique(args);
  }
  async create<T extends Prisma.OrganizationContactEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationContactEmployeeCreateArgs>
  ): Promise<OrganizationContactEmployee> {
    return this.prisma.organizationContactEmployee.create<T>(args);
  }
  async update<T extends Prisma.OrganizationContactEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationContactEmployeeUpdateArgs>
  ): Promise<OrganizationContactEmployee> {
    return this.prisma.organizationContactEmployee.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationContactEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationContactEmployeeDeleteArgs>
  ): Promise<OrganizationContactEmployee> {
    return this.prisma.organizationContactEmployee.delete(args);
  }

  async getOrganizationContact(
    parentId: string
  ): Promise<OrganizationContact | null> {
    return this.prisma.organizationContactEmployee
      .findUnique({
        where: { id: parentId },
      })
      .organizationContact();
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.organizationContactEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}