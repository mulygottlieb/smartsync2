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
import { GoalService } from "../goal.service";
import { GoalCreateInput } from "./GoalCreateInput";
import { GoalWhereInput } from "./GoalWhereInput";
import { GoalWhereUniqueInput } from "./GoalWhereUniqueInput";
import { GoalFindManyArgs } from "./GoalFindManyArgs";
import { GoalUpdateInput } from "./GoalUpdateInput";
import { Goal } from "./Goal";
import { KeyResultFindManyArgs } from "../../keyResult/base/KeyResultFindManyArgs";
import { KeyResult } from "../../keyResult/base/KeyResult";
import { KeyResultWhereUniqueInput } from "../../keyResult/base/KeyResultWhereUniqueInput";

export class GoalControllerBase {
  constructor(protected readonly service: GoalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Goal })
  async create(@common.Body() data: GoalCreateInput): Promise<Goal> {
    return await this.service.create({
      data: {
        ...data,

        employeeGoalOwnerEmployeeIdToemployee:
          data.employeeGoalOwnerEmployeeIdToemployee
            ? {
                connect: data.employeeGoalOwnerEmployeeIdToemployee,
              }
            : undefined,

        keyResultGoalAlignedKeyResultIdTokeyResult:
          data.keyResultGoalAlignedKeyResultIdTokeyResult
            ? {
                connect: data.keyResultGoalAlignedKeyResultIdTokeyResult,
              }
            : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        organizationTeam: data.organizationTeam
          ? {
              connect: data.organizationTeam,
            }
          : undefined,

        employeeGoalLeadIdToemployee: data.employeeGoalLeadIdToemployee
          ? {
              connect: data.employeeGoalLeadIdToemployee,
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
        deadline: true,
        level: true,
        progress: true,

        employeeGoalOwnerEmployeeIdToemployee: {
          select: {
            id: true,
          },
        },

        keyResultGoalAlignedKeyResultIdTokeyResult: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        employeeGoalLeadIdToemployee: {
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
  @swagger.ApiOkResponse({ type: [Goal] })
  @ApiNestedQuery(GoalFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Goal[]> {
    const args = plainToClass(GoalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        deadline: true,
        level: true,
        progress: true,

        employeeGoalOwnerEmployeeIdToemployee: {
          select: {
            id: true,
          },
        },

        keyResultGoalAlignedKeyResultIdTokeyResult: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        employeeGoalLeadIdToemployee: {
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
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        deadline: true,
        level: true,
        progress: true,

        employeeGoalOwnerEmployeeIdToemployee: {
          select: {
            id: true,
          },
        },

        keyResultGoalAlignedKeyResultIdTokeyResult: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationTeam: {
          select: {
            id: true,
          },
        },

        employeeGoalLeadIdToemployee: {
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
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() data: GoalUpdateInput
  ): Promise<Goal | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          employeeGoalOwnerEmployeeIdToemployee:
            data.employeeGoalOwnerEmployeeIdToemployee
              ? {
                  connect: data.employeeGoalOwnerEmployeeIdToemployee,
                }
              : undefined,

          keyResultGoalAlignedKeyResultIdTokeyResult:
            data.keyResultGoalAlignedKeyResultIdTokeyResult
              ? {
                  connect: data.keyResultGoalAlignedKeyResultIdTokeyResult,
                }
              : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          organizationTeam: data.organizationTeam
            ? {
                connect: data.organizationTeam,
              }
            : undefined,

          employeeGoalLeadIdToemployee: data.employeeGoalLeadIdToemployee
            ? {
                connect: data.employeeGoalLeadIdToemployee,
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
          deadline: true,
          level: true,
          progress: true,

          employeeGoalOwnerEmployeeIdToemployee: {
            select: {
              id: true,
            },
          },

          keyResultGoalAlignedKeyResultIdTokeyResult: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          employeeGoalLeadIdToemployee: {
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
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          deadline: true,
          level: true,
          progress: true,

          employeeGoalOwnerEmployeeIdToemployee: {
            select: {
              id: true,
            },
          },

          keyResultGoalAlignedKeyResultIdTokeyResult: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organizationTeam: {
            select: {
              id: true,
            },
          },

          employeeGoalLeadIdToemployee: {
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

  @common.Get("/:id/keyResultKeyResultGoalIdTogoal")
  @ApiNestedQuery(KeyResultFindManyArgs)
  async findManyKeyResultKeyResultGoalIdTogoal(
    @common.Req() request: Request,
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<KeyResult[]> {
    const query = plainToClass(KeyResultFindManyArgs, request.query);
    const results = await this.service.findKeyResultKeyResultGoalIdTogoal(
      params.id,
      {
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/keyResultKeyResultGoalIdTogoal")
  async connectKeyResultKeyResultGoalIdTogoal(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResultKeyResultGoalIdTogoal: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/keyResultKeyResultGoalIdTogoal")
  async updateKeyResultKeyResultGoalIdTogoal(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResultKeyResultGoalIdTogoal: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/keyResultKeyResultGoalIdTogoal")
  async disconnectKeyResultKeyResultGoalIdTogoal(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: KeyResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      keyResultKeyResultGoalIdTogoal: {
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