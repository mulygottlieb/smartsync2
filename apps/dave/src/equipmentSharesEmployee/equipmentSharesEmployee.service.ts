import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipmentSharesEmployeeServiceBase } from "./base/equipmentSharesEmployee.service.base";

@Injectable()
export class EquipmentSharesEmployeeService extends EquipmentSharesEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
