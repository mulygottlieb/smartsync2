import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobPresetUpworkJobSearchCriterionServiceBase } from "./base/jobPresetUpworkJobSearchCriterion.service.base";

@Injectable()
export class JobPresetUpworkJobSearchCriterionService extends JobPresetUpworkJobSearchCriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
