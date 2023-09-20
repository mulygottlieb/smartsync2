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
import { JobSearchOccupationService } from "../jobSearchOccupation.service";
import { JobSearchOccupationCreateInput } from "./JobSearchOccupationCreateInput";
import { JobSearchOccupationWhereInput } from "./JobSearchOccupationWhereInput";
import { JobSearchOccupationWhereUniqueInput } from "./JobSearchOccupationWhereUniqueInput";
import { JobSearchOccupationFindManyArgs } from "./JobSearchOccupationFindManyArgs";
import { JobSearchOccupationUpdateInput } from "./JobSearchOccupationUpdateInput";
import { JobSearchOccupation } from "./JobSearchOccupation";
import { EmployeeUpworkJobSearchCriterionFindManyArgs } from "../../employeeUpworkJobSearchCriterion/base/EmployeeUpworkJobSearchCriterionFindManyArgs";
import { EmployeeUpworkJobSearchCriterion } from "../../employeeUpworkJobSearchCriterion/base/EmployeeUpworkJobSearchCriterion";
import { EmployeeUpworkJobSearchCriterionWhereUniqueInput } from "../../employeeUpworkJobSearchCriterion/base/EmployeeUpworkJobSearchCriterionWhereUniqueInput";
import { JobPresetUpworkJobSearchCriterionFindManyArgs } from "../../jobPresetUpworkJobSearchCriterion/base/JobPresetUpworkJobSearchCriterionFindManyArgs";
import { JobPresetUpworkJobSearchCriterion } from "../../jobPresetUpworkJobSearchCriterion/base/JobPresetUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterionWhereUniqueInput } from "../../jobPresetUpworkJobSearchCriterion/base/JobPresetUpworkJobSearchCriterionWhereUniqueInput";

export class JobSearchOccupationControllerBase {
  constructor(protected readonly service: JobSearchOccupationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobSearchOccupation })
  async create(
    @common.Body() data: JobSearchOccupationCreateInput
  ): Promise<JobSearchOccupation> {
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
        jobSourceOccupationId: true,
        jobSource: true,

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
  @swagger.ApiOkResponse({ type: [JobSearchOccupation] })
  @ApiNestedQuery(JobSearchOccupationFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<JobSearchOccupation[]> {
    const args = plainToClass(JobSearchOccupationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        jobSourceOccupationId: true,
        jobSource: true,

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
  @swagger.ApiOkResponse({ type: JobSearchOccupation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: JobSearchOccupationWhereUniqueInput
  ): Promise<JobSearchOccupation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        jobSourceOccupationId: true,
        jobSource: true,

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
  @swagger.ApiOkResponse({ type: JobSearchOccupation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() data: JobSearchOccupationUpdateInput
  ): Promise<JobSearchOccupation | null> {
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
          jobSourceOccupationId: true,
          jobSource: true,

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
  @swagger.ApiOkResponse({ type: JobSearchOccupation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: JobSearchOccupationWhereUniqueInput
  ): Promise<JobSearchOccupation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          jobSourceOccupationId: true,
          jobSource: true,

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

  @common.Get("/:id/employeeUpworkJobSearchCriterion")
  @ApiNestedQuery(EmployeeUpworkJobSearchCriterionFindManyArgs)
  async findManyEmployeeUpworkJobSearchCriterion(
    @common.Req() request: Request,
    @common.Param() params: JobSearchOccupationWhereUniqueInput
  ): Promise<EmployeeUpworkJobSearchCriterion[]> {
    const query = plainToClass(
      EmployeeUpworkJobSearchCriterionFindManyArgs,
      request.query
    );
    const results = await this.service.findEmployeeUpworkJobSearchCriterion(
      params.id,
      {
        ...query,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          keyword: true,
          jobType: true,

          jobPreset: {
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

          jobSearchOccupation: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          jobSearchCategory: {
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

  @common.Post("/:id/employeeUpworkJobSearchCriterion")
  async connectEmployeeUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: EmployeeUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeUpworkJobSearchCriterion: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employeeUpworkJobSearchCriterion")
  async updateEmployeeUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: EmployeeUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeUpworkJobSearchCriterion: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employeeUpworkJobSearchCriterion")
  async disconnectEmployeeUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: EmployeeUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeUpworkJobSearchCriterion: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/jobPresetUpworkJobSearchCriterion")
  @ApiNestedQuery(JobPresetUpworkJobSearchCriterionFindManyArgs)
  async findManyJobPresetUpworkJobSearchCriterion(
    @common.Req() request: Request,
    @common.Param() params: JobSearchOccupationWhereUniqueInput
  ): Promise<JobPresetUpworkJobSearchCriterion[]> {
    const query = plainToClass(
      JobPresetUpworkJobSearchCriterionFindManyArgs,
      request.query
    );
    const results = await this.service.findJobPresetUpworkJobSearchCriterion(
      params.id,
      {
        ...query,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          keyword: true,
          jobType: true,

          tenant: {
            select: {
              id: true,
            },
          },

          jobPreset: {
            select: {
              id: true,
            },
          },

          jobSearchCategory: {
            select: {
              id: true,
            },
          },

          jobSearchOccupation: {
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobPresetUpworkJobSearchCriterion")
  async connectJobPresetUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: JobPresetUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPresetUpworkJobSearchCriterion: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobPresetUpworkJobSearchCriterion")
  async updateJobPresetUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: JobPresetUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPresetUpworkJobSearchCriterion: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobPresetUpworkJobSearchCriterion")
  async disconnectJobPresetUpworkJobSearchCriterion(
    @common.Param() params: JobSearchOccupationWhereUniqueInput,
    @common.Body() body: JobPresetUpworkJobSearchCriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobPresetUpworkJobSearchCriterion: {
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
