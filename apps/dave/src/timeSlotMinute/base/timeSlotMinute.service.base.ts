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
  TimeSlotMinute,
  Organization,
  TimeSlot,
  Tenant,
} from "@prisma/client";

export class TimeSlotMinuteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TimeSlotMinuteCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteCountArgs>
  ): Promise<number> {
    return this.prisma.timeSlotMinute.count(args);
  }

  async findMany<T extends Prisma.TimeSlotMinuteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteFindManyArgs>
  ): Promise<TimeSlotMinute[]> {
    return this.prisma.timeSlotMinute.findMany(args);
  }
  async findOne<T extends Prisma.TimeSlotMinuteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteFindUniqueArgs>
  ): Promise<TimeSlotMinute | null> {
    return this.prisma.timeSlotMinute.findUnique(args);
  }
  async create<T extends Prisma.TimeSlotMinuteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteCreateArgs>
  ): Promise<TimeSlotMinute> {
    return this.prisma.timeSlotMinute.create<T>(args);
  }
  async update<T extends Prisma.TimeSlotMinuteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteUpdateArgs>
  ): Promise<TimeSlotMinute> {
    return this.prisma.timeSlotMinute.update<T>(args);
  }
  async delete<T extends Prisma.TimeSlotMinuteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeSlotMinuteDeleteArgs>
  ): Promise<TimeSlotMinute> {
    return this.prisma.timeSlotMinute.delete(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.timeSlotMinute
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getTimeSlot(parentId: string): Promise<TimeSlot | null> {
    return this.prisma.timeSlotMinute
      .findUnique({
        where: { id: parentId },
      })
      .timeSlot();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.timeSlotMinute
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}