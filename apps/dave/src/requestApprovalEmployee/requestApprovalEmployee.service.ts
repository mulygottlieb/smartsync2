import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestApprovalEmployeeServiceBase } from "./base/requestApprovalEmployee.service.base";

@Injectable()
export class RequestApprovalEmployeeService extends RequestApprovalEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
