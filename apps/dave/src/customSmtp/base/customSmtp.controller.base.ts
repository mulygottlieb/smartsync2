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
import { CustomSmtpService } from "../customSmtp.service";
import { CustomSmtpCreateInput } from "./CustomSmtpCreateInput";
import { CustomSmtpWhereInput } from "./CustomSmtpWhereInput";
import { CustomSmtpWhereUniqueInput } from "./CustomSmtpWhereUniqueInput";
import { CustomSmtpFindManyArgs } from "./CustomSmtpFindManyArgs";
import { CustomSmtpUpdateInput } from "./CustomSmtpUpdateInput";
import { CustomSmtp } from "./CustomSmtp";

export class CustomSmtpControllerBase {
  constructor(protected readonly service: CustomSmtpService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomSmtp })
  async create(
    @common.Body() data: CustomSmtpCreateInput
  ): Promise<CustomSmtp> {
    return await this.service.create({
      data: {
        ...data,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

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
        host: true,
        port: true,
        secure: true,
        username: true,
        password: true,
        isValidate: true,
        fromAddress: true,

        organization: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomSmtp] })
  @ApiNestedQuery(CustomSmtpFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<CustomSmtp[]> {
    const args = plainToClass(CustomSmtpFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        host: true,
        port: true,
        secure: true,
        username: true,
        password: true,
        isValidate: true,
        fromAddress: true,

        organization: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomSmtp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CustomSmtpWhereUniqueInput
  ): Promise<CustomSmtp | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        host: true,
        port: true,
        secure: true,
        username: true,
        password: true,
        isValidate: true,
        fromAddress: true,

        organization: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CustomSmtp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CustomSmtpWhereUniqueInput,
    @common.Body() data: CustomSmtpUpdateInput
  ): Promise<CustomSmtp | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

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
          host: true,
          port: true,
          secure: true,
          username: true,
          password: true,
          isValidate: true,
          fromAddress: true,

          organization: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: CustomSmtp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CustomSmtpWhereUniqueInput
  ): Promise<CustomSmtp | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          host: true,
          port: true,
          secure: true,
          username: true,
          password: true,
          isValidate: true,
          fromAddress: true,

          organization: {
            select: {
              id: true,
            },
          },

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
