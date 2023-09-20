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
import { PaymentService } from "../payment.service";
import { PaymentCreateInput } from "./PaymentCreateInput";
import { PaymentWhereInput } from "./PaymentWhereInput";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentUpdateInput } from "./PaymentUpdateInput";
import { Payment } from "./Payment";
import { TagPaymentFindManyArgs } from "../../tagPayment/base/TagPaymentFindManyArgs";
import { TagPayment } from "../../tagPayment/base/TagPayment";
import { TagPaymentWhereUniqueInput } from "../../tagPayment/base/TagPaymentWhereUniqueInput";

export class PaymentControllerBase {
  constructor(protected readonly service: PaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Payment })
  async create(@common.Body() data: PaymentCreateInput): Promise<Payment> {
    return await this.service.create({
      data: {
        ...data,

        invoice: data.invoice
          ? {
              connect: data.invoice,
            }
          : undefined,

        organizationProject: data.organizationProject
          ? {
              connect: data.organizationProject,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        user: {
          connect: data.user,
        },

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        organizationContact: data.organizationContact
          ? {
              connect: data.organizationContact,
            }
          : undefined,
      },
      select: {
        invoice: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        id: true,
        createdAt: true,
        updatedAt: true,
        paymentDate: true,
        amount: true,
        note: true,
        currency: true,
        overdue: true,
        paymentMethod: true,

        user: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationContact: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Payment] })
  @ApiNestedQuery(PaymentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Payment[]> {
    const args = plainToClass(PaymentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        invoice: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        id: true,
        createdAt: true,
        updatedAt: true,
        paymentDate: true,
        amount: true,
        note: true,
        currency: true,
        overdue: true,
        paymentMethod: true,

        user: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationContact: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        invoice: {
          select: {
            id: true,
          },
        },

        organizationProject: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        id: true,
        createdAt: true,
        updatedAt: true,
        paymentDate: true,
        amount: true,
        note: true,
        currency: true,
        overdue: true,
        paymentMethod: true,

        user: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        organizationContact: {
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
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() data: PaymentUpdateInput
  ): Promise<Payment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          invoice: data.invoice
            ? {
                connect: data.invoice,
              }
            : undefined,

          organizationProject: data.organizationProject
            ? {
                connect: data.organizationProject,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          user: {
            connect: data.user,
          },

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          organizationContact: data.organizationContact
            ? {
                connect: data.organizationContact,
              }
            : undefined,
        },
        select: {
          invoice: {
            select: {
              id: true,
            },
          },

          organizationProject: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          id: true,
          createdAt: true,
          updatedAt: true,
          paymentDate: true,
          amount: true,
          note: true,
          currency: true,
          overdue: true,
          paymentMethod: true,

          user: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organizationContact: {
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
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          invoice: {
            select: {
              id: true,
            },
          },

          organizationProject: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          id: true,
          createdAt: true,
          updatedAt: true,
          paymentDate: true,
          amount: true,
          note: true,
          currency: true,
          overdue: true,
          paymentMethod: true,

          user: {
            select: {
              id: true,
            },
          },

          employee: {
            select: {
              id: true,
            },
          },

          tenant: {
            select: {
              id: true,
            },
          },

          organizationContact: {
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

  @common.Get("/:id/tagPayment")
  @ApiNestedQuery(TagPaymentFindManyArgs)
  async findManyTagPayment(
    @common.Req() request: Request,
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<TagPayment[]> {
    const query = plainToClass(TagPaymentFindManyArgs, request.query);
    const results = await this.service.findTagPayment(params.id, {
      ...query,
      select: {
        payment: {
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

  @common.Post("/:id/tagPayment")
  async connectTagPayment(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() body: TagPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagPayment: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tagPayment")
  async updateTagPayment(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() body: TagPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagPayment: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tagPayment")
  async disconnectTagPayment(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() body: TagPaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tagPayment: {
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
