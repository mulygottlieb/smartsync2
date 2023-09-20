import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillEmployeeServiceBase } from "./base/skillEmployee.service.base";

@Injectable()
export class SkillEmployeeService extends SkillEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
