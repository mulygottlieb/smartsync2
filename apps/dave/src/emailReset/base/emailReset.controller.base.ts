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
import { EmailResetService } from "../emailReset.service";
import { EmailResetCreateInput } from "./EmailResetCreateInput";
import { EmailResetWhereInput } from "./EmailResetWhereInput";
import { EmailResetWhereUniqueInput } from "./EmailResetWhereUniqueInput";
import { EmailResetFindManyArgs } from "./EmailResetFindManyArgs";
import { EmailResetUpdateInput } from "./EmailResetUpdateInput";
import { EmailReset } from "./EmailReset";

export class EmailResetControllerBase {
  constructor(protected readonly service: EmailResetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailReset })
  async create(
    @common.Body() data: EmailResetCreateInput
  ): Promise<EmailReset> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        oldEmail: true,
        code: true,
        token: true,
        expiredAt: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailReset] })
  @ApiNestedQuery(EmailResetFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EmailReset[]> {
    const args = plainToClass(EmailResetFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        oldEmail: true,
        code: true,
        token: true,
        expiredAt: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailReset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EmailResetWhereUniqueInput
  ): Promise<EmailReset | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        oldEmail: true,
        code: true,
        token: true,
        expiredAt: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
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
  @swagger.ApiOkResponse({ type: EmailReset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EmailResetWhereUniqueInput,
    @common.Body() data: EmailResetUpdateInput
  ): Promise<EmailReset | null> {
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

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          oldEmail: true,
          code: true,
          token: true,
          expiredAt: true,

          tenant: {
            select: {
              id: true,
            },
          },

          user: {
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
  @swagger.ApiOkResponse({ type: EmailReset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EmailResetWhereUniqueInput
  ): Promise<EmailReset | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          oldEmail: true,
          code: true,
          token: true,
          expiredAt: true,

          tenant: {
            select: {
              id: true,
            },
          },

          user: {
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
