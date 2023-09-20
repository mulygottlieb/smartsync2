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
import { EmployeeAwardService } from "../employeeAward.service";
import { EmployeeAwardCreateInput } from "./EmployeeAwardCreateInput";
import { EmployeeAwardWhereInput } from "./EmployeeAwardWhereInput";
import { EmployeeAwardWhereUniqueInput } from "./EmployeeAwardWhereUniqueInput";
import { EmployeeAwardFindManyArgs } from "./EmployeeAwardFindManyArgs";
import { EmployeeAwardUpdateInput } from "./EmployeeAwardUpdateInput";
import { EmployeeAward } from "./EmployeeAward";

export class EmployeeAwardControllerBase {
  constructor(protected readonly service: EmployeeAwardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeAward })
  async create(
    @common.Body() data: EmployeeAwardCreateInput
  ): Promise<EmployeeAward> {
    return await this.service.create({
      data: {
        ...data,

        employee: {
          connect: data.employee,
        },

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        year: true,

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeAward] })
  @ApiNestedQuery(EmployeeAwardFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EmployeeAward[]> {
    const args = plainToClass(EmployeeAwardFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        year: true,

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeAward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EmployeeAwardWhereUniqueInput
  ): Promise<EmployeeAward | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        year: true,

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organization: {
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
  @swagger.ApiOkResponse({ type: EmployeeAward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EmployeeAwardWhereUniqueInput,
    @common.Body() data: EmployeeAwardUpdateInput
  ): Promise<EmployeeAward | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          employee: {
            connect: data.employee,
          },

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          year: true,

          employee: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organization: {
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
  @swagger.ApiOkResponse({ type: EmployeeAward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EmployeeAwardWhereUniqueInput
  ): Promise<EmployeeAward | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          year: true,

          employee: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organization: {
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
