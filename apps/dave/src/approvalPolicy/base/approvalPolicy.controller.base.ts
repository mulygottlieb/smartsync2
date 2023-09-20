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
import { ApprovalPolicyService } from "../approvalPolicy.service";
import { ApprovalPolicyCreateInput } from "./ApprovalPolicyCreateInput";
import { ApprovalPolicyWhereInput } from "./ApprovalPolicyWhereInput";
import { ApprovalPolicyWhereUniqueInput } from "./ApprovalPolicyWhereUniqueInput";
import { ApprovalPolicyFindManyArgs } from "./ApprovalPolicyFindManyArgs";
import { ApprovalPolicyUpdateInput } from "./ApprovalPolicyUpdateInput";
import { ApprovalPolicy } from "./ApprovalPolicy";
import { RequestApprovalFindManyArgs } from "../../requestApproval/base/RequestApprovalFindManyArgs";
import { RequestApproval } from "../../requestApproval/base/RequestApproval";
import { RequestApprovalWhereUniqueInput } from "../../requestApproval/base/RequestApprovalWhereUniqueInput";

export class ApprovalPolicyControllerBase {
  constructor(protected readonly service: ApprovalPolicyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApprovalPolicy })
  async create(
    @common.Body() data: ApprovalPolicyCreateInput
  ): Promise<ApprovalPolicy> {
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
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        approvalType: true,

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
  @swagger.ApiOkResponse({ type: [ApprovalPolicy] })
  @ApiNestedQuery(ApprovalPolicyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ApprovalPolicy[]> {
    const args = plainToClass(ApprovalPolicyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        approvalType: true,

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
  @swagger.ApiOkResponse({ type: ApprovalPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ApprovalPolicyWhereUniqueInput
  ): Promise<ApprovalPolicy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        approvalType: true,

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
  @swagger.ApiOkResponse({ type: ApprovalPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ApprovalPolicyWhereUniqueInput,
    @common.Body() data: ApprovalPolicyUpdateInput
  ): Promise<ApprovalPolicy | null> {
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
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          approvalType: true,

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
  @swagger.ApiOkResponse({ type: ApprovalPolicy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ApprovalPolicyWhereUniqueInput
  ): Promise<ApprovalPolicy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          approvalType: true,

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

  @common.Get("/:id/requestApproval")
  @ApiNestedQuery(RequestApprovalFindManyArgs)
  async findManyRequestApproval(
    @common.Req() request: Request,
    @common.Param() params: ApprovalPolicyWhereUniqueInput
  ): Promise<RequestApproval[]> {
    const query = plainToClass(RequestApprovalFindManyArgs, request.query);
    const results = await this.service.findRequestApproval(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        status: true,
        createdBy: true,
        createdByName: true,
        minCount: true,
        requestId: true,
        requestType: true,

        approvalPolicy: {
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

  @common.Post("/:id/requestApproval")
  async connectRequestApproval(
    @common.Param() params: ApprovalPolicyWhereUniqueInput,
    @common.Body() body: RequestApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestApproval: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/requestApproval")
  async updateRequestApproval(
    @common.Param() params: ApprovalPolicyWhereUniqueInput,
    @common.Body() body: RequestApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestApproval: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/requestApproval")
  async disconnectRequestApproval(
    @common.Param() params: ApprovalPolicyWhereUniqueInput,
    @common.Body() body: RequestApprovalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestApproval: {
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
