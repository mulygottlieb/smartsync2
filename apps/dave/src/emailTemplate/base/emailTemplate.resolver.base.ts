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
import { CreateEmailTemplateArgs } from "./CreateEmailTemplateArgs";
import { UpdateEmailTemplateArgs } from "./UpdateEmailTemplateArgs";
import { DeleteEmailTemplateArgs } from "./DeleteEmailTemplateArgs";
import { EmailTemplateCountArgs } from "./EmailTemplateCountArgs";
import { EmailTemplateFindManyArgs } from "./EmailTemplateFindManyArgs";
import { EmailTemplateFindUniqueArgs } from "./EmailTemplateFindUniqueArgs";
import { EmailTemplate } from "./EmailTemplate";
import { EmailSentFindManyArgs } from "../../emailSent/base/EmailSentFindManyArgs";
import { EmailSent } from "../../emailSent/base/EmailSent";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { EmailTemplateService } from "../emailTemplate.service";
@graphql.Resolver(() => EmailTemplate)
export class EmailTemplateResolverBase {
  constructor(protected readonly service: EmailTemplateService) {}

  async _emailTemplatesMeta(
    @graphql.Args() args: EmailTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailTemplate])
  async emailTemplates(
    @graphql.Args() args: EmailTemplateFindManyArgs
  ): Promise<EmailTemplate[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => EmailTemplate, { nullable: true })
  async emailTemplate(
    @graphql.Args() args: EmailTemplateFindUniqueArgs
  ): Promise<EmailTemplate | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailTemplate)
  async createEmailTemplate(
    @graphql.Args() args: CreateEmailTemplateArgs
  ): Promise<EmailTemplate> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => EmailTemplate)
  async updateEmailTemplate(
    @graphql.Args() args: UpdateEmailTemplateArgs
  ): Promise<EmailTemplate | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
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

  @graphql.Mutation(() => EmailTemplate)
  async deleteEmailTemplate(
    @graphql.Args() args: DeleteEmailTemplateArgs
  ): Promise<EmailTemplate | null> {
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

  @graphql.ResolveField(() => [EmailSent], { name: "emailSent" })
  async resolveFieldEmailSent(
    @graphql.Parent() parent: EmailTemplate,
    @graphql.Args() args: EmailSentFindManyArgs
  ): Promise<EmailSent[]> {
    const results = await this.service.findEmailSent(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  async resolveFieldTenant(
    @graphql.Parent() parent: EmailTemplate
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

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
    @graphql.Parent() parent: EmailTemplate
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
