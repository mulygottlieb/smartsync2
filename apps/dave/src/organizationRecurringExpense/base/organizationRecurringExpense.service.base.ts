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
  OrganizationRecurringExpense,
  Tenant,
  Organization,
} from "@prisma/client";

export class OrganizationRecurringExpenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationRecurringExpenseCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationRecurringExpenseCountArgs>
  ): Promise<number> {
    return this.prisma.organizationRecurringExpense.count(args);
  }

  async findMany<T extends Prisma.OrganizationRecurringExpenseFindManyArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationRecurringExpenseFindManyArgs
    >
  ): Promise<OrganizationRecurringExpense[]> {
    return this.prisma.organizationRecurringExpense.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationRecurringExpenseFindUniqueArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.OrganizationRecurringExpenseFindUniqueArgs
    >
  ): Promise<OrganizationRecurringExpense | null> {
    return this.prisma.organizationRecurringExpense.findUnique(args);
  }
  async create<T extends Prisma.OrganizationRecurringExpenseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationRecurringExpenseCreateArgs>
  ): Promise<OrganizationRecurringExpense> {
    return this.prisma.organizationRecurringExpense.create<T>(args);
  }
  async update<T extends Prisma.OrganizationRecurringExpenseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationRecurringExpenseUpdateArgs>
  ): Promise<OrganizationRecurringExpense> {
    return this.prisma.organizationRecurringExpense.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationRecurringExpenseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationRecurringExpenseDeleteArgs>
  ): Promise<OrganizationRecurringExpense> {
    return this.prisma.organizationRecurringExpense.delete(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.organizationRecurringExpense
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.organizationRecurringExpense
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
