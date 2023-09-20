import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobSearchOccupationServiceBase } from "./base/jobSearchOccupation.service.base";

@Injectable()
export class JobSearchOccupationService extends JobSearchOccupationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
