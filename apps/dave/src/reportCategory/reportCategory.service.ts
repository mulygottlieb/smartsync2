import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportCategoryServiceBase } from "./base/reportCategory.service.base";

@Injectable()
export class ReportCategoryService extends ReportCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
