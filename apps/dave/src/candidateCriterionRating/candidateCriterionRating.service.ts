import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateCriterionRatingServiceBase } from "./base/candidateCriterionRating.service.base";

@Injectable()
export class CandidateCriterionRatingService extends CandidateCriterionRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
