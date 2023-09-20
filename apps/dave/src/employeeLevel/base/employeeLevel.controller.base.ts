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
import { EmployeeLevelService } from "../employeeLevel.service";
import { EmployeeLevelCreateInput } from "./EmployeeLevelCreateInput";
import { EmployeeLevelWhereInput } from "./EmployeeLevelWhereInput";
import { EmployeeLevelWhereUniqueInput } from "./EmployeeLevelWhereUniqueInput";
import { EmployeeLevelFindManyArgs } from "./EmployeeLevelFindManyArgs";
import { EmployeeLevelUpdateInput } from "./EmployeeLevelUpdateInput";
import { EmployeeLevel } from "./EmployeeLevel";
import { TagEmployeeLevelFindManyArgs } from "../../tagEmployeeLevel/base/TagEmployeeLevelFindManyArgs";
import { TagEmployeeLevel } from "../../tagEmployeeLevel/base/TagEmployeeLevel";
import { TagEmployeeLevelWhereUniqueInput } from "../../tagEmployeeLevel/base/TagEmployeeLevelWhereUniqueInput";

export class EmployeeLevelControllerBase {
  constructor(protected readonly service: EmployeeLevelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeLevel })
  async create(
    @common.Body() data: EmployeeLevelCreateInput
  ): Promise<EmployeeLevel> {
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
        level: true,

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
  @swagger.ApiOkResponse({ type: [EmployeeLevel] })
  @ApiNestedQuery(EmployeeLevelFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EmployeeLevel[]> {
    const args = plainToClass(EmployeeLevelFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        level: true,

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
  @swagger.ApiOkResponse({ type: EmployeeLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EmployeeLevelWhereUniqueInput
  ): Promise<EmployeeLevel | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        level: true,

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
  @swagger.ApiOkResponse({ type: EmployeeLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EmployeeLevelWhereUniqueInput,
    @common.Body() data: EmployeeLevelUpdateInput
  ): Promise<EmployeeLevel | null> {
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
          level: true,

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
  @swagger.ApiOkResponse({ type: EmployeeLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EmployeeLevelWhereUniqueInput
  ): Promise<EmployeeLevel | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          level: true,

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

  @common.Get("/:id/tagEmployeeLevel")
  @ApiNestedQuery(TagEmployeeLevelFindManyArgs)
  async findManyTagEmployeeLevel(
    @common.Req() request: Request,
    @common.Param() params: EmployeeLevelWhereUniqueInput
  ): Promise<TagEmployeeLevel[]> {
    const query = plainToClass(TagEmployeeLevelFindManyArgs, request.query);
    const results = await this.service.findTagEmployeeLevel(params.id, {
      ...query,
      select: {
        employeeLevel: {
          select: {
            id: true,
          },
        },

        tag: {
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

  @common.Post("/:id/tagEmployeeLevel")
  async connectTagEmployeeLevel(
    @common.Param() params: EmployeeLevelWhereUniqueInput,
    @common.Body() body: TagEmployeeLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagEmployeeLevel: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tagEmployeeLevel")
  async updateTagEmployeeLevel(
    @common.Param() params: EmployeeLevelWhereUniqueInput,
    @common.Body() body: TagEmployeeLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagEmployeeLevel: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tagEmployeeLevel")
  async disconnectTagEmployeeLevel(
    @common.Param() params: EmployeeLevelWhereUniqueInput,
    @common.Body() body: TagEmployeeLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagEmployeeLevel: {
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