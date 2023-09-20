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
import { JobPresetUpworkJobSearchCriterionService } from "../jobPresetUpworkJobSearchCriterion.service";
import { JobPresetUpworkJobSearchCriterionCreateInput } from "./JobPresetUpworkJobSearchCriterionCreateInput";
import { JobPresetUpworkJobSearchCriterionWhereInput } from "./JobPresetUpworkJobSearchCriterionWhereInput";
import { JobPresetUpworkJobSearchCriterionWhereUniqueInput } from "./JobPresetUpworkJobSearchCriterionWhereUniqueInput";
import { JobPresetUpworkJobSearchCriterionFindManyArgs } from "./JobPresetUpworkJobSearchCriterionFindManyArgs";
import { JobPresetUpworkJobSearchCriterionUpdateInput } from "./JobPresetUpworkJobSearchCriterionUpdateInput";
import { JobPresetUpworkJobSearchCriterion } from "./JobPresetUpworkJobSearchCriterion";

export class JobPresetUpworkJobSearchCriterionControllerBase {
  constructor(
    protected readonly service: JobPresetUpworkJobSearchCriterionService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobPresetUpworkJobSearchCriterion })
  async create(
    @common.Body() data: JobPresetUpworkJobSearchCriterionCreateInput
  ): Promise<JobPresetUpworkJobSearchCriterion> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        jobPreset: {
          connect: data.jobPreset,
        },

        jobSearchCategory: data.jobSearchCategory
          ? {
              connect: data.jobSearchCategory,
            }
          : undefined,

        jobSearchOccupation: data.jobSearchOccupation
          ? {
              connect: data.jobSearchOccupation,
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
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobPresetUpworkJobSearchCriterion] })
  @ApiNestedQuery(JobPresetUpworkJobSearchCriterionFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<JobPresetUpworkJobSearchCriterion[]> {
    const args = plainToClass(
      JobPresetUpworkJobSearchCriterionFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
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
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobPresetUpworkJobSearchCriterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: JobPresetUpworkJobSearchCriterionWhereUniqueInput
  ): Promise<JobPresetUpworkJobSearchCriterion | null> {
    const result = await this.service.findOne({
      where: params,
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
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobPresetUpworkJobSearchCriterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: JobPresetUpworkJobSearchCriterionWhereUniqueInput,
    @common.Body() data: JobPresetUpworkJobSearchCriterionUpdateInput
  ): Promise<JobPresetUpworkJobSearchCriterion | null> {
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

          jobPreset: {
            connect: data.jobPreset,
          },

          jobSearchCategory: data.jobSearchCategory
            ? {
                connect: data.jobSearchCategory,
              }
            : undefined,

          jobSearchOccupation: data.jobSearchOccupation
            ? {
                connect: data.jobSearchOccupation,
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
  @swagger.ApiOkResponse({ type: JobPresetUpworkJobSearchCriterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: JobPresetUpworkJobSearchCriterionWhereUniqueInput
  ): Promise<JobPresetUpworkJobSearchCriterion | null> {
    try {
      return await this.service.delete({
        where: params,
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
