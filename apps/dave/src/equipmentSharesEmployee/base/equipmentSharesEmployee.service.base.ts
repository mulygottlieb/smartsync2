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
  EquipmentSharesEmployee,
  Employee,
  EquipmentSharing,
} from "@prisma/client";

export class EquipmentSharesEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EquipmentSharesEmployeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeCountArgs>
  ): Promise<number> {
    return this.prisma.equipmentSharesEmployee.count(args);
  }

  async findMany<T extends Prisma.EquipmentSharesEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeFindManyArgs>
  ): Promise<EquipmentSharesEmployee[]> {
    return this.prisma.equipmentSharesEmployee.findMany(args);
  }
  async findOne<T extends Prisma.EquipmentSharesEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeFindUniqueArgs>
  ): Promise<EquipmentSharesEmployee | null> {
    return this.prisma.equipmentSharesEmployee.findUnique(args);
  }
  async create<T extends Prisma.EquipmentSharesEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeCreateArgs>
  ): Promise<EquipmentSharesEmployee> {
    return this.prisma.equipmentSharesEmployee.create<T>(args);
  }
  async update<T extends Prisma.EquipmentSharesEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeUpdateArgs>
  ): Promise<EquipmentSharesEmployee> {
    return this.prisma.equipmentSharesEmployee.update<T>(args);
  }
  async delete<T extends Prisma.EquipmentSharesEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipmentSharesEmployeeDeleteArgs>
  ): Promise<EquipmentSharesEmployee> {
    return this.prisma.equipmentSharesEmployee.delete(args);
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.equipmentSharesEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getEquipmentSharing(
    parentId: string
  ): Promise<EquipmentSharing | null> {
    return this.prisma.equipmentSharesEmployee
      .findUnique({
        where: { id: parentId },
      })
      .equipmentSharing();
  }
}
