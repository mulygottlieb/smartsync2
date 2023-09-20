import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateDepartmentServiceBase } from "./base/candidateDepartment.service.base";

@Injectable()
export class CandidateDepartmentService extends CandidateDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
