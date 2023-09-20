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
import { CurrencyService } from "../currency.service";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { Currency } from "./Currency";

export class CurrencyControllerBase {
  constructor(protected readonly service: CurrencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  async create(@common.Body() data: CurrencyCreateInput): Promise<Currency> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isoCode: true,
        currency: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @ApiNestedQuery(CurrencyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isoCode: true,
        currency: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isoCode: true,
        currency: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isoCode: true,
          currency: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isoCode: true,
          currency: true,
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
