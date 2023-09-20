import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeTasksTaskServiceBase } from "./base/employeeTasksTask.service.base";

@Injectable()
export class EmployeeTasksTaskService extends EmployeeTasksTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
