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
import { CreateAvailabilitySlotArgs } from "./CreateAvailabilitySlotArgs";
import { UpdateAvailabilitySlotArgs } from "./UpdateAvailabilitySlotArgs";
import { DeleteAvailabilitySlotArgs } from "./DeleteAvailabilitySlotArgs";
import { AvailabilitySlotCountArgs } from "./AvailabilitySlotCountArgs";
import { AvailabilitySlotFindManyArgs } from "./AvailabilitySlotFindManyArgs";
import { AvailabilitySlotFindUniqueArgs } from "./AvailabilitySlotFindUniqueArgs";
import { AvailabilitySlot } from "./AvailabilitySlot";
import { Employee } from "../../employee/base/Employee";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { AvailabilitySlotService } from "../availabilitySlot.service";
@graphql.Resolver(() => AvailabilitySlot)
export class AvailabilitySlotResolverBase {
  constructor(protected readonly service: AvailabilitySlotService) {}

  async _availabilitySlotsMeta(
    @graphql.Args() args: AvailabilitySlotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AvailabilitySlot])
  async availabilitySlots(
    @graphql.Args() args: AvailabilitySlotFindManyArgs
  ): Promise<AvailabilitySlot[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AvailabilitySlot, { nullable: true })
  async availabilitySlot(
    @graphql.Args() args: AvailabilitySlotFindUniqueArgs
  ): Promise<AvailabilitySlot | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AvailabilitySlot)
  async createAvailabilitySlot(
    @graphql.Args() args: CreateAvailabilitySlotArgs
  ): Promise<AvailabilitySlot> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AvailabilitySlot)
  async updateAvailabilitySlot(
    @graphql.Args() args: UpdateAvailabilitySlotArgs
  ): Promise<AvailabilitySlot | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
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

  @graphql.Mutation(() => AvailabilitySlot)
  async deleteAvailabilitySlot(
    @graphql.Args() args: DeleteAvailabilitySlotArgs
  ): Promise<AvailabilitySlot | null> {
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

  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  async resolveFieldEmployee(
    @graphql.Parent() parent: AvailabilitySlot
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async resolveFieldOrganization(
    @graphql.Parent() parent: AvailabilitySlot
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

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
    @graphql.Parent() parent: AvailabilitySlot
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}