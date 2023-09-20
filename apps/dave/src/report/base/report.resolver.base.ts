/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateReportArgs } from "./CreateReportArgs";
import { UpdateReportArgs } from "./UpdateReportArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { Report } from "./Report";
import { ReportOrganizationFindManyArgs } from "../../reportOrganization/base/ReportOrganizationFindManyArgs";
import { ReportOrganization } from "../../reportOrganization/base/ReportOrganization";
import { ReportCategory } from "../../reportCategory/base/ReportCategory";
import { ReportService } from "../report.service";
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(protected readonly service: ReportService) {}

  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Report])
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Report, { nullable: true })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Report)
  async createReport(@graphql.Args() args: CreateReportArgs): Promise<Report> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        reportCategory: {
          connect: args.data.reportCategory,
        },
      },
    });
  }

  @graphql.Mutation(() => Report)
  async updateReport(
    @graphql.Args() args: UpdateReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          reportCategory: {
            connect: args.data.reportCategory,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Report)
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ReportOrganization], {
    name: "reportOrganization",
  })
  async resolveFieldReportOrganization(
    @graphql.Parent() parent: Report,
    @graphql.Args() args: ReportOrganizationFindManyArgs
  ): Promise<ReportOrganization[]> {
    const results = await this.service.findReportOrganization(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => ReportCategory, {
    nullable: true,
    name: "reportCategory",
  })
  async resolveFieldReportCategory(
    @graphql.Parent() parent: Report
  ): Promise<ReportCategory | null> {
    const result = await this.service.getReportCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}