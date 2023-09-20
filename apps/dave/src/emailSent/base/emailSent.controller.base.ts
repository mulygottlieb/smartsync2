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
import { EmailSentService } from "../emailSent.service";
import { EmailSentCreateInput } from "./EmailSentCreateInput";
import { EmailSentWhereInput } from "./EmailSentWhereInput";
import { EmailSentWhereUniqueInput } from "./EmailSentWhereUniqueInput";
import { EmailSentFindManyArgs } from "./EmailSentFindManyArgs";
import { EmailSentUpdateInput } from "./EmailSentUpdateInput";
import { EmailSent } from "./EmailSent";

export class EmailSentControllerBase {
  constructor(protected readonly service: EmailSentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailSent })
  async create(@common.Body() data: EmailSentCreateInput): Promise<EmailSent> {
    return await this.service.create({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        emailTemplate: {
          connect: data.emailTemplate,
        },
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        email: true,
        isArchived: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        emailTemplate: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailSent] })
  @ApiNestedQuery(EmailSentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EmailSent[]> {
    const args = plainToClass(EmailSentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        email: true,
        isArchived: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        emailTemplate: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailSent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: EmailSentWhereUniqueInput
  ): Promise<EmailSent | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        content: true,
        email: true,
        isArchived: true,

        tenant: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        emailTemplate: {
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
  @swagger.ApiOkResponse({ type: EmailSent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: EmailSentWhereUniqueInput,
    @common.Body() data: EmailSentUpdateInput
  ): Promise<EmailSent | null> {
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

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          emailTemplate: {
            connect: data.emailTemplate,
          },
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          content: true,
          email: true,
          isArchived: true,

          tenant: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          emailTemplate: {
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
  @swagger.ApiOkResponse({ type: EmailSent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: EmailSentWhereUniqueInput
  ): Promise<EmailSent | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          content: true,
          email: true,
          isArchived: true,

          tenant: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          emailTemplate: {
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
