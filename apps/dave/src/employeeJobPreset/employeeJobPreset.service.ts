import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeJobPresetServiceBase } from "./base/employeeJobPreset.service.base";

@Injectable()
export class EmployeeJobPresetService extends EmployeeJobPresetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
