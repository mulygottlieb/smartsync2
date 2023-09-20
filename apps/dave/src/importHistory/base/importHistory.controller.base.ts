/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImportHistoryService } from "../importHistory.service";
import { ImportHistoryCreateInput } from "./ImportHistoryCreateInput";
import { ImportHistoryWhereInput } from "./ImportHistoryWhereInput";
import { ImportHistoryWhereUniqueInput } from "./ImportHistoryWhereUniqueInput";
import { ImportHistoryFindManyArgs } from "./ImportHistoryFindManyArgs";
import { ImportHistoryUpdateInput } from "./ImportHistoryUpdateInput";
import { ImportHistory } from "./ImportHistory";

export class ImportHistoryControllerBase {
  constructor(protected readonly service: ImportHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ImportHistory })
  async create(
    @common.Body() data: ImportHistoryCreateInput
  ): Promise<ImportHistory> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        file: true,
        path: true,
        size: true,
        status: true,
        importDate: true,

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ImportHistory] })
  @ApiNestedQuery(ImportHistoryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ImportHistory[]> {
    const args = plainToClass(ImportHistoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        file: true,
        path: true,
        size: true,
        status: true,
        importDate: true,

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ImportHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ImportHistoryWhereUniqueInput
  ): Promise<ImportHistory | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        file: true,
        path: true,
        size: true,
        status: true,
        importDate: true,

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ImportHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ImportHistoryWhereUniqueInput,
    @common.Body() data: ImportHistoryUpdateInput
  ): Promise<ImportHistory | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          file: true,
          path: true,
          size: true,
          status: true,
          importDate: true,

          tenant: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ImportHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ImportHistoryWhereUniqueInput
  ): Promise<ImportHistory | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          file: true,
          path: true,
          size: true,
          status: true,
          importDate: true,

          tenant: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
