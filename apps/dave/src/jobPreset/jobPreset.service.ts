import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobPresetServiceBase } from "./base/jobPreset.service.base";

@Injectable()
export class JobPresetService extends JobPresetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
