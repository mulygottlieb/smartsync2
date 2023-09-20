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
import { TimeOffRequestService } from "../timeOffRequest.service";
import { TimeOffRequestCreateInput } from "./TimeOffRequestCreateInput";
import { TimeOffRequestWhereInput } from "./TimeOffRequestWhereInput";
import { TimeOffRequestWhereUniqueInput } from "./TimeOffRequestWhereUniqueInput";
import { TimeOffRequestFindManyArgs } from "./TimeOffRequestFindManyArgs";
import { TimeOffRequestUpdateInput } from "./TimeOffRequestUpdateInput";
import { TimeOffRequest } from "./TimeOffRequest";
import { TimeOffRequestEmployeeFindManyArgs } from "../../timeOffRequestEmployee/base/TimeOffRequestEmployeeFindManyArgs";
import { TimeOffRequestEmployee } from "../../timeOffRequestEmployee/base/TimeOffRequestEmployee";
import { TimeOffRequestEmployeeWhereUniqueInput } from "../../timeOffRequestEmployee/base/TimeOffRequestEmployeeWhereUniqueInput";

export class TimeOffRequestControllerBase {
  constructor(protected readonly service: TimeOffRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TimeOffRequest })
  async create(
    @common.Body() data: TimeOffRequestCreateInput
  ): Promise<TimeOffRequest> {
    return await this.service.create({
      data: {
        ...data,

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

        imageAsset: data.imageAsset
          ? {
              connect: data.imageAsset,
            }
          : undefined,

        timeOffPolicy: {
          connect: data.timeOffPolicy,
        },
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        documentUrl: true,
        description: true,
        start: true,
        end: true,
        requestDate: true,
        status: true,
        isHoliday: true,
        isArchived: true,

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

        imageAsset: {
          select: {
            id: true,
          },
        },

        timeOffPolicy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TimeOffRequest] })
  @ApiNestedQuery(TimeOffRequestFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TimeOffRequest[]> {
    const args = plainToClass(TimeOffRequestFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        documentUrl: true,
        description: true,
        start: true,
        end: true,
        requestDate: true,
        status: true,
        isHoliday: true,
        isArchived: true,

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

        imageAsset: {
          select: {
            id: true,
          },
        },

        timeOffPolicy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TimeOffRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TimeOffRequestWhereUniqueInput
  ): Promise<TimeOffRequest | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        documentUrl: true,
        description: true,
        start: true,
        end: true,
        requestDate: true,
        status: true,
        isHoliday: true,
        isArchived: true,

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

        imageAsset: {
          select: {
            id: true,
          },
        },

        timeOffPolicy: {
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
  @swagger.ApiOkResponse({ type: TimeOffRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TimeOffRequestWhereUniqueInput,
    @common.Body() data: TimeOffRequestUpdateInput
  ): Promise<TimeOffRequest | null> {
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

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          imageAsset: data.imageAsset
            ? {
                connect: data.imageAsset,
              }
            : undefined,

          timeOffPolicy: {
            connect: data.timeOffPolicy,
          },
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          documentUrl: true,
          description: true,
          start: true,
          end: true,
          requestDate: true,
          status: true,
          isHoliday: true,
          isArchived: true,

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

          imageAsset: {
            select: {
              id: true,
            },
          },

          timeOffPolicy: {
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
  @swagger.ApiOkResponse({ type: TimeOffRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TimeOffRequestWhereUniqueInput
  ): Promise<TimeOffRequest | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          documentUrl: true,
          description: true,
          start: true,
          end: true,
          requestDate: true,
          status: true,
          isHoliday: true,
          isArchived: true,

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

          imageAsset: {
            select: {
              id: true,
            },
          },

          timeOffPolicy: {
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

  @common.Get("/:id/timeOffRequestEmployee")
  @ApiNestedQuery(TimeOffRequestEmployeeFindManyArgs)
  async findManyTimeOffRequestEmployee(
    @common.Req() request: Request,
    @common.Param() params: TimeOffRequestWhereUniqueInput
  ): Promise<TimeOffRequestEmployee[]> {
    const query = plainToClass(
      TimeOffRequestEmployeeFindManyArgs,
      request.query
    );
    const results = await this.service.findTimeOffRequestEmployee(params.id, {
      ...query,
      select: {
        timeOffRequest: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/timeOffRequestEmployee")
  async connectTimeOffRequestEmployee(
    @common.Param() params: TimeOffRequestWhereUniqueInput,
    @common.Body() body: TimeOffRequestEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timeOffRequestEmployee: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/timeOffRequestEmployee")
  async updateTimeOffRequestEmployee(
    @common.Param() params: TimeOffRequestWhereUniqueInput,
    @common.Body() body: TimeOffRequestEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timeOffRequestEmployee: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/timeOffRequestEmployee")
  async disconnectTimeOffRequestEmployee(
    @common.Param() params: TimeOffRequestWhereUniqueInput,
    @common.Body() body: TimeOffRequestEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timeOffRequestEmployee: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
