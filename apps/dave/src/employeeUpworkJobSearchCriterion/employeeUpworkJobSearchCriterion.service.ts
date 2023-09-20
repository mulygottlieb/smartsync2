import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeUpworkJobSearchCriterionServiceBase } from "./base/employeeUpworkJobSearchCriterion.service.base";

@Injectable()
export class EmployeeUpworkJobSearchCriterionService extends EmployeeUpworkJobSearchCriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
