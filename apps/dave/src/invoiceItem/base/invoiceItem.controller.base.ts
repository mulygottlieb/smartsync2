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
import { InvoiceItemService } from "../invoiceItem.service";
import { InvoiceItemCreateInput } from "./InvoiceItemCreateInput";
import { InvoiceItemWhereInput } from "./InvoiceItemWhereInput";
import { InvoiceItemWhereUniqueInput } from "./InvoiceItemWhereUniqueInput";
import { InvoiceItemFindManyArgs } from "./InvoiceItemFindManyArgs";
import { InvoiceItemUpdateInput } from "./InvoiceItemUpdateInput";
import { InvoiceItem } from "./InvoiceItem";

export class InvoiceItemControllerBase {
  constructor(protected readonly service: InvoiceItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InvoiceItem })
  async create(
    @common.Body() data: InvoiceItemCreateInput
  ): Promise<InvoiceItem> {
    return await this.service.create({
      data: {
        ...data,

        organizationProject: data.organizationProject
          ? {
              connect: data.organizationProject,
            }
          : undefined,

        invoice: data.invoice
          ? {
              connect: data.invoice,
            }
          : undefined,

        task: data.task
          ? {
              connect: data.task,
            }
          : undefined,

        expense: data.expense
          ? {
              connect: data.expense,
            }
          : undefined,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,

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
        description: true,
        price: true,
        quantity: true,
        totalValue: true,
        applyTax: true,
        applyDiscount: true,

        organizationProject: {
          select: {
            id: true,
          },
        },

        invoice: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },

        expense: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        product: {
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InvoiceItem] })
  @ApiNestedQuery(InvoiceItemFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<InvoiceItem[]> {
    const args = plainToClass(InvoiceItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        price: true,
        quantity: true,
        totalValue: true,
        applyTax: true,
        applyDiscount: true,

        organizationProject: {
          select: {
            id: true,
          },
        },

        invoice: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },

        expense: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        product: {
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        price: true,
        quantity: true,
        totalValue: true,
        applyTax: true,
        applyDiscount: true,

        organizationProject: {
          select: {
            id: true,
          },
        },

        invoice: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },

        expense: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        product: {
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: InvoiceItemWhereUniqueInput,
    @common.Body() data: InvoiceItemUpdateInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organizationProject: data.organizationProject
            ? {
                connect: data.organizationProject,
              }
            : undefined,

          invoice: data.invoice
            ? {
                connect: data.invoice,
              }
            : undefined,

          task: data.task
            ? {
                connect: data.task,
              }
            : undefined,

          expense: data.expense
            ? {
                connect: data.expense,
              }
            : undefined,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,

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
          description: true,
          price: true,
          quantity: true,
          totalValue: true,
          applyTax: true,
          applyDiscount: true,

          organizationProject: {
            select: {
              id: true,
            },
          },

          invoice: {
            select: {
              id: true,
            },
          },

          task: {
            select: {
              id: true,
            },
          },

          expense: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          product: {
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
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          price: true,
          quantity: true,
          totalValue: true,
          applyTax: true,
          applyDiscount: true,

          organizationProject: {
            select: {
              id: true,
            },
          },

          invoice: {
            select: {
              id: true,
            },
          },

          task: {
            select: {
              id: true,
            },
          },

          expense: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          product: {
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
