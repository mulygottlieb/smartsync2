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
  AvailabilitySlot,
  Employee,
  Organization,
  Tenant,
} from "@prisma/client";

export class AvailabilitySlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AvailabilitySlotCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotCountArgs>
  ): Promise<number> {
    return this.prisma.availabilitySlot.count(args);
  }

  async findMany<T extends Prisma.AvailabilitySlotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotFindManyArgs>
  ): Promise<AvailabilitySlot[]> {
    return this.prisma.availabilitySlot.findMany(args);
  }
  async findOne<T extends Prisma.AvailabilitySlotFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotFindUniqueArgs>
  ): Promise<AvailabilitySlot | null> {
    return this.prisma.availabilitySlot.findUnique(args);
  }
  async create<T extends Prisma.AvailabilitySlotCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotCreateArgs>
  ): Promise<AvailabilitySlot> {
    return this.prisma.availabilitySlot.create<T>(args);
  }
  async update<T extends Prisma.AvailabilitySlotUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotUpdateArgs>
  ): Promise<AvailabilitySlot> {
    return this.prisma.availabilitySlot.update<T>(args);
  }
  async delete<T extends Prisma.AvailabilitySlotDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilitySlotDeleteArgs>
  ): Promise<AvailabilitySlot> {
    return this.prisma.availabilitySlot.delete(args);
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.availabilitySlot
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.availabilitySlot
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.availabilitySlot
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
