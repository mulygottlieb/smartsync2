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
import { CreateImportRecordArgs } from "./CreateImportRecordArgs";
import { UpdateImportRecordArgs } from "./UpdateImportRecordArgs";
import { DeleteImportRecordArgs } from "./DeleteImportRecordArgs";
import { ImportRecordCountArgs } from "./ImportRecordCountArgs";
import { ImportRecordFindManyArgs } from "./ImportRecordFindManyArgs";
import { ImportRecordFindUniqueArgs } from "./ImportRecordFindUniqueArgs";
import { ImportRecord } from "./ImportRecord";
import { Tenant } from "../../tenant/base/Tenant";
import { ImportRecordService } from "../importRecord.service";
@graphql.Resolver(() => ImportRecord)
export class ImportRecordResolverBase {
  constructor(protected readonly service: ImportRecordService) {}

  async _importRecordsMeta(
    @graphql.Args() args: ImportRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ImportRecord])
  async importRecords(
    @graphql.Args() args: ImportRecordFindManyArgs
  ): Promise<ImportRecord[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ImportRecord, { nullable: true })
  async importRecord(
    @graphql.Args() args: ImportRecordFindUniqueArgs
  ): Promise<ImportRecord | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ImportRecord)
  async createImportRecord(
    @graphql.Args() args: CreateImportRecordArgs
  ): Promise<ImportRecord> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ImportRecord)
  async updateImportRecord(
    @graphql.Args() args: UpdateImportRecordArgs
  ): Promise<ImportRecord | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,
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

  @graphql.Mutation(() => ImportRecord)
  async deleteImportRecord(
    @graphql.Args() args: DeleteImportRecordArgs
  ): Promise<ImportRecord | null> {
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

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: ImportRecord
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
