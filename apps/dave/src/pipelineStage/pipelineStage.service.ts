import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PipelineStageServiceBase } from "./base/pipelineStage.service.base";

@Injectable()
export class PipelineStageService extends PipelineStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
