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
import { GoalKpiService } from "../goalKpi.service";
import { GoalKpiCreateInput } from "./GoalKpiCreateInput";
import { GoalKpiWhereInput } from "./GoalKpiWhereInput";
import { GoalKpiWhereUniqueInput } from "./GoalKpiWhereUniqueInput";
import { GoalKpiFindManyArgs } from "./GoalKpiFindManyArgs";
import { GoalKpiUpdateInput } from "./GoalKpiUpdateInput";
import { GoalKpi } from "./GoalKpi";
import { KeyResultFindManyArgs } from "../../keyResult/base/KeyResultFindManyArgs";
import { KeyResult } from "../../keyResult/base/KeyResult";
import { KeyResultWhereUniqueInput } from "../../keyResult/base/KeyResultWhereUniqueInput";

export class GoalKpiControllerBase {
  constructor(protected readonly service: GoalKpiService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GoalKpi })
  async create(@common.Body() data: GoalKpiCreateInput): Promise<GoalKpi> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        employee: data.employee
          ? {
              connect: data.employee,
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
        description: true,
        typeField: true,
        unit: true,
        operator: true,
        currentValue: true,
        targetValue: true,

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

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GoalKpi] })
  @ApiNestedQuery(GoalKpiFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<GoalKpi[]> {
    const args = plainToClass(GoalKpiFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        typeField: true,
        unit: true,
        operator: true,
        currentValue: true,
        targetValue: true,

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

        organization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GoalKpi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: GoalKpiWhereUniqueInput
  ): Promise<GoalKpi | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        typeField: true,
        unit: true,
        operator: true,
        currentValue: true,
        targetValue: true,

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
  @swagger.ApiOkResponse({ type: GoalKpi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: GoalKpiWhereUniqueInput,
    @common.Body() data: GoalKpiUpdateInput
  ): Promise<GoalKpi | null> {
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

          employee: data.employee
            ? {
                connect: data.employee,
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
          description: true,
          typeField: true,
          unit: true,
          operator: true,
          currentValue: true,
          targetValue: true,

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
  @swagger.ApiOkResponse({ type: GoalKpi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: GoalKpiWhereUniqueInput
  ): Promise<GoalKpi | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          typeField: true,
          unit: true,
          operator: true,
          currentValue: true,
          targetValue: true,

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

  @common.Get("/:id/keyResult")
  @ApiNestedQuery(KeyResultFindManyArgs)
  async findManyKeyResult(
    @common.Req() request: Request,
    @common.Param() params: GoalKpiWhereUniqueInput
  ): Promise<KeyResult[]> {
    const query = plainToClass(KeyResultFindManyArgs, request.query);
    const results = await this.service.findKeyResult(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        typeField: true,
        targetValue: true,
        initialValue: true,
        unit: true,
        update: true,
        progress: true,
        deadline: true,
        hardDeadline: true,
        softDeadline: true,
        status: true,
        weight: true,

        organizationProject: {
          select: {
            id: true,
          },
        },

        goalKpi: {
          select: {
            id: true,
          },
        },

        employeeKeyResultOwnerIdToemployee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        employeeKeyResultLeadIdToemployee: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },

        goalKeyResultGoalIdTogoal: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/keyResult")
  async connectKeyResult(
    @common.Param() params: GoalKpiWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResult: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/keyResult")
  async updateKeyResult(
    @common.Param() params: GoalKpiWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResult: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/keyResult")
  async disconnectKeyResult(
    @common.Param() params: GoalKpiWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResult: {
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