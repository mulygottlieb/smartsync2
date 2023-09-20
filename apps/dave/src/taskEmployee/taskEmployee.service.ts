import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskEmployeeServiceBase } from "./base/taskEmployee.service.base";

@Injectable()
export class TaskEmployeeService extends TaskEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
