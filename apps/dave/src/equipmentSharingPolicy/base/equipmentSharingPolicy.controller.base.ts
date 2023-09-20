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
import { EquipmentSharingPolicyService } from "../equipmentSharingPolicy.service";
import { EquipmentSharingPolicyCreateInput } from "./EquipmentSharingPolicyCreateInput";
import { EquipmentSharingPolicyWhereInput } from "./EquipmentSharingPolicyWhereInput";
import { EquipmentSharingPolicyWhereUniqueInput } from "./EquipmentSharingPolicyWhereUniqueInput";
import { EquipmentSharingPolicyFindManyArgs } from "./EquipmentSharingPolicyFindManyArgs";
import { EquipmentSharingPolicyUpdateInput } from "./EquipmentSharingPolicyUpdateInput";
import { EquipmentSharingPolicy } from "./EquipmentSharingPolicy";
import { EquipmentSharingFindManyArgs } from "../../equipmentSharing/base/EquipmentSharingFindManyArgs";
import { EquipmentSharing } from "../../equipmentSharing/base/EquipmentSharing";
import { EquipmentSharingWhereUniqueInput } from "../../equipmentSharing/base/EquipmentSharingWhereUniqueInput";

export class EquipmentSharingPolicyControllerBase {
  constructor(protected readonly service: EquipmentSharingPolicyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EquipmentSharingPolicy })
  async create(
    @common.Body() data: EquipmentSharingPolicyCreateInput
  ): Promise<EquipmentSharingPolicy> {
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
        name: true,
        description: true,

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
  @swagger.ApiOkResponse({ type: [EquipmentSharingPolicy] })
  @ApiNestedQuery(EquipmentSharingPolicyFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<EquipmentSharingPolicy[]> {
    const args = plainToClass(
      EquipmentSharingPolicyFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

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
  @swagger.ApiOkResponse({ type: EquipmentSharingPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput
  ): Promise<EquipmentSharingPolicy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

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
  @swagger.ApiOkResponse({ type: EquipmentSharingPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput,
    @common.Body() data: EquipmentSharingPolicyUpdateInput
  ): Promise<EquipmentSharingPolicy | null> {
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
          name: true,
          description: true,

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
  @swagger.ApiOkResponse({ type: EquipmentSharingPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput
  ): Promise<EquipmentSharingPolicy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,

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

  @common.Get("/:id/equipmentSharing")
  @ApiNestedQuery(EquipmentSharingFindManyArgs)
  async findManyEquipmentSharing(
    @common.Req() request: Request,
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput
  ): Promise<EquipmentSharing[]> {
    const query = plainToClass(EquipmentSharingFindManyArgs, request.query);
    const results = await this.service.findEquipmentSharing(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        shareRequestDay: true,
        shareStartDay: true,
        shareEndDay: true,
        status: true,
        createdBy: true,
        createdByName: true,

        equipmentSharingPolicy: {
          select: {
            id: true,
          },
        },

        equipment: {
          select: {
            id: true,
          },
        },

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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/equipmentSharing")
  async connectEquipmentSharing(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput,
    @common.Body() body: EquipmentSharingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      equipmentSharing: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/equipmentSharing")
  async updateEquipmentSharing(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput,
    @common.Body() body: EquipmentSharingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      equipmentSharing: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/equipmentSharing")
  async disconnectEquipmentSharing(
    @common.Param() params: EquipmentSharingPolicyWhereUniqueInput,
    @common.Body() body: EquipmentSharingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      equipmentSharing: {
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