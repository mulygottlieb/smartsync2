import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobSearchCategoryServiceBase } from "./base/jobSearchCategory.service.base";

@Injectable()
export class JobSearchCategoryService extends JobSearchCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
