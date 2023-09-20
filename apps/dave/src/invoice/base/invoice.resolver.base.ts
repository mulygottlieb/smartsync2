/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateInvoiceArgs } from "./CreateInvoiceArgs";
import { UpdateInvoiceArgs } from "./UpdateInvoiceArgs";
import { DeleteInvoiceArgs } from "./DeleteInvoiceArgs";
import { InvoiceCountArgs } from "./InvoiceCountArgs";
import { InvoiceFindManyArgs } from "./InvoiceFindManyArgs";
import { InvoiceFindUniqueArgs } from "./InvoiceFindUniqueArgs";
import { Invoice } from "./Invoice";
import { InvoiceEstimateHistoryFindManyArgs } from "../../invoiceEstimateHistory/base/InvoiceEstimateHistoryFindManyArgs";
import { InvoiceEstimateHistory } from "../../invoiceEstimateHistory/base/InvoiceEstimateHistory";
import { InvoiceItemFindManyArgs } from "../../invoiceItem/base/InvoiceItemFindManyArgs";
import { InvoiceItem } from "../../invoiceItem/base/InvoiceItem";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { TagInvoiceFindManyArgs } from "../../tagInvoice/base/TagInvoiceFindManyArgs";
import { TagInvoice } from "../../tagInvoice/base/TagInvoice";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { OrganizationContact } from "../../organizationContact/base/OrganizationContact";
import { InvoiceService } from "../invoice.service";
@graphql.Resolver(() => Invoice)
export class InvoiceResolverBase {
  constructor(protected readonly service: InvoiceService) {}

  async _invoicesMeta(
    @graphql.Args() args: InvoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Invoice])
  async invoices(
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<Invoice[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Invoice, { nullable: true })
  async invoice(
    @graphql.Args() args: InvoiceFindUniqueArgs
  ): Promise<Invoice | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Invoice)
  async createInvoice(
    @graphql.Args() args: CreateInvoiceArgs
  ): Promise<Invoice> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organizationInvoiceOrganizationIdToorganization: args.data
          .organizationInvoiceOrganizationIdToorganization
          ? {
              connect:
                args.data.organizationInvoiceOrganizationIdToorganization,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        organizationInvoiceFromOrganizationIdToorganization: {
          connect:
            args.data.organizationInvoiceFromOrganizationIdToorganization,
        },

        organizationContact: args.data.organizationContact
          ? {
              connect: args.data.organizationContact,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Invoice)
  async updateInvoice(
    @graphql.Args() args: UpdateInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organizationInvoiceOrganizationIdToorganization: args.data
            .organizationInvoiceOrganizationIdToorganization
            ? {
                connect:
                  args.data.organizationInvoiceOrganizationIdToorganization,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          organizationInvoiceFromOrganizationIdToorganization: {
            connect:
              args.data.organizationInvoiceFromOrganizationIdToorganization,
          },

          organizationContact: args.data.organizationContact
            ? {
                connect: args.data.organizationContact,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Invoice)
  async deleteInvoice(
    @graphql.Args() args: DeleteInvoiceArgs
  ): Promise<Invoice | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [InvoiceEstimateHistory], {
    name: "invoiceEstimateHistory",
  })
  async resolveFieldInvoiceEstimateHistory(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: InvoiceEstimateHistoryFindManyArgs
  ): Promise<InvoiceEstimateHistory[]> {
    const results = await this.service.findInvoiceEstimateHistory(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [InvoiceItem], { name: "invoiceItem" })
  async resolveFieldInvoiceItem(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: InvoiceItemFindManyArgs
  ): Promise<InvoiceItem[]> {
    const results = await this.service.findInvoiceItem(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Payment], { name: "payment" })
  async resolveFieldPayment(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [TagInvoice], { name: "tagInvoice" })
  async resolveFieldTagInvoice(
    @graphql.Parent() parent: Invoice,
    @graphql.Args() args: TagInvoiceFindManyArgs
  ): Promise<TagInvoice[]> {
    const results = await this.service.findTagInvoice(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organizationInvoiceOrganizationIdToorganization",
  })
  async resolveFieldOrganizationInvoiceOrganizationIdToorganization(
    @graphql.Parent() parent: Invoice
  ): Promise<Organization | null> {
    const result =
      await this.service.getOrganizationInvoiceOrganizationIdToorganization(
        parent.id
      );

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: Invoice
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organizationInvoiceFromOrganizationIdToorganization",
  })
  async resolveFieldOrganizationInvoiceFromOrganizationIdToorganization(
    @graphql.Parent() parent: Invoice
  ): Promise<Organization | null> {
    const result =
      await this.service.getOrganizationInvoiceFromOrganizationIdToorganization(
        parent.id
      );

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrganizationContact, {
    nullable: true,
    name: "organizationContact",
  })
  async resolveFieldOrganizationContact(
    @graphql.Parent() parent: Invoice
  ): Promise<OrganizationContact | null> {
    const result = await this.service.getOrganizationContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}