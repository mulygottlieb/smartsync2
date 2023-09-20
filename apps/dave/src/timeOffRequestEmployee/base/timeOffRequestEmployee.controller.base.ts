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
import { TimeOffRequestEmployeeService } from "../timeOffRequestEmployee.service";
import { TimeOffRequestEmployeeCreateInput } from "./TimeOffRequestEmployeeCreateInput";
import { TimeOffRequestEmployeeWhereInput } from "./TimeOffRequestEmployeeWhereInput";
import { TimeOffRequestEmployeeWhereUniqueInput } from "./TimeOffRequestEmployeeWhereUniqueInput";
import { TimeOffRequestEmployeeFindManyArgs } from "./TimeOffRequestEmployeeFindManyArgs";
import { TimeOffRequestEmployeeUpdateInput } from "./TimeOffRequestEmployeeUpdateInput";
import { TimeOffRequestEmployee } from "./TimeOffRequestEmployee";

export class TimeOffRequestEmployeeControllerBase {
  constructor(protected readonly service: TimeOffRequestEmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TimeOffRequestEmployee })
  async create(
    @common.Body() data: TimeOffRequestEmployeeCreateInput
  ): Promise<TimeOffRequestEmployee> {
    return await this.service.create({
      data: {
        ...data,

        timeOffRequest: {
          connect: data.timeOffRequest,
        },

        employee: {
          connect: data.employee,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TimeOffRequestEmployee] })
  @ApiNestedQuery(TimeOffRequestEmployeeFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<TimeOffRequestEmployee[]> {
    const args = plainToClass(
      TimeOffRequestEmployeeFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TimeOffRequestEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TimeOffRequestEmployeeWhereUniqueInput
  ): Promise<TimeOffRequestEmployee | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TimeOffRequestEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TimeOffRequestEmployeeWhereUniqueInput,
    @common.Body() data: TimeOffRequestEmployeeUpdateInput
  ): Promise<TimeOffRequestEmployee | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          timeOffRequest: {
            connect: data.timeOffRequest,
          },

          employee: {
            connect: data.employee,
          },
        },
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
  @swagger.ApiOkResponse({ type: TimeOffRequestEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TimeOffRequestEmployeeWhereUniqueInput
  ): Promise<TimeOffRequestEmployee | null> {
    try {
      return await this.service.delete({
        where: params,
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
