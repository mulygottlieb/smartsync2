import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateTechnologyServiceBase } from "./base/candidateTechnology.service.base";

@Injectable()
export class CandidateTechnologyService extends CandidateTechnologyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
