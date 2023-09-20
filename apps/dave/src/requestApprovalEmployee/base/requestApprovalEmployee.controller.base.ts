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
import { RequestApprovalEmployeeService } from "../requestApprovalEmployee.service";
import { RequestApprovalEmployeeCreateInput } from "./RequestApprovalEmployeeCreateInput";
import { RequestApprovalEmployeeWhereInput } from "./RequestApprovalEmployeeWhereInput";
import { RequestApprovalEmployeeWhereUniqueInput } from "./RequestApprovalEmployeeWhereUniqueInput";
import { RequestApprovalEmployeeFindManyArgs } from "./RequestApprovalEmployeeFindManyArgs";
import { RequestApprovalEmployeeUpdateInput } from "./RequestApprovalEmployeeUpdateInput";
import { RequestApprovalEmployee } from "./RequestApprovalEmployee";

export class RequestApprovalEmployeeControllerBase {
  constructor(protected readonly service: RequestApprovalEmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RequestApprovalEmployee })
  async create(
    @common.Body() data: RequestApprovalEmployeeCreateInput
  ): Promise<RequestApprovalEmployee> {
    return await this.service.create({
      data: {
        ...data,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        requestApproval: {
          connect: data.requestApproval,
        },

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        employee: {
          connect: data.employee,
        },
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,

        organization: {
          select: {
            id: true,
          },
        },

        requestApproval: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RequestApprovalEmployee] })
  @ApiNestedQuery(RequestApprovalEmployeeFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<RequestApprovalEmployee[]> {
    const args = plainToClass(
      RequestApprovalEmployeeFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,

        organization: {
          select: {
            id: true,
          },
        },

        requestApproval: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RequestApprovalEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RequestApprovalEmployeeWhereUniqueInput
  ): Promise<RequestApprovalEmployee | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,

        organization: {
          select: {
            id: true,
          },
        },

        requestApproval: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        employee: {
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
  @swagger.ApiOkResponse({ type: RequestApprovalEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RequestApprovalEmployeeWhereUniqueInput,
    @common.Body() data: RequestApprovalEmployeeUpdateInput
  ): Promise<RequestApprovalEmployee | null> {
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

          requestApproval: {
            connect: data.requestApproval,
          },

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          employee: {
            connect: data.employee,
          },
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,

          organization: {
            select: {
              id: true,
            },
          },

          requestApproval: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          employee: {
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
  @swagger.ApiOkResponse({ type: RequestApprovalEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RequestApprovalEmployeeWhereUniqueInput
  ): Promise<RequestApprovalEmployee | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,

          organization: {
            select: {
              id: true,
            },
          },

          requestApproval: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          employee: {
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
