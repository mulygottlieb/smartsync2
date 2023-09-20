/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  OrganizationProject,
  Activity,
  Expense,
  InviteOrganizationProject,
  InvoiceItem,
  IssueType,
  KeyResult,
  OrganizationProjectEmployee,
  OrganizationSprint,
  OrganizationTaskSetting,
  Payment,
  TagOrganizationProject,
  Task,
  TaskPriority,
  TaskRelatedIssueType,
  TaskSize,
  TaskStatus,
  TaskVersion,
  TimeLog,
  ImageAsset,
  Tenant,
  Organization,
  OrganizationContact,
} from "@prisma/client";

export class OrganizationProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationProjectCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectCountArgs>
  ): Promise<number> {
    return this.prisma.organizationProject.count(args);
  }

  async findMany<T extends Prisma.OrganizationProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectFindManyArgs>
  ): Promise<OrganizationProject[]> {
    return this.prisma.organizationProject.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationProjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectFindUniqueArgs>
  ): Promise<OrganizationProject | null> {
    return this.prisma.organizationProject.findUnique(args);
  }
  async create<T extends Prisma.OrganizationProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectCreateArgs>
  ): Promise<OrganizationProject> {
    return this.prisma.organizationProject.create<T>(args);
  }
  async update<T extends Prisma.OrganizationProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectUpdateArgs>
  ): Promise<OrganizationProject> {
    return this.prisma.organizationProject.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationProjectDeleteArgs>
  ): Promise<OrganizationProject> {
    return this.prisma.organizationProject.delete(args);
  }

  async findActivity(
    parentId: string,
    args: Prisma.ActivityFindManyArgs
  ): Promise<Activity[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .activity(args);
  }

  async findExpense(
    parentId: string,
    args: Prisma.ExpenseFindManyArgs
  ): Promise<Expense[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .expense(args);
  }

  async findInviteOrganizationProject(
    parentId: string,
    args: Prisma.InviteOrganizationProjectFindManyArgs
  ): Promise<InviteOrganizationProject[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .inviteOrganizationProject(args);
  }

  async findInvoiceItem(
    parentId: string,
    args: Prisma.InvoiceItemFindManyArgs
  ): Promise<InvoiceItem[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invoiceItem(args);
  }

  async findIssueType(
    parentId: string,
    args: Prisma.IssueTypeFindManyArgs
  ): Promise<IssueType[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .issueType(args);
  }

  async findKeyResult(
    parentId: string,
    args: Prisma.KeyResultFindManyArgs
  ): Promise<KeyResult[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .keyResult(args);
  }

  async findOrganizationProjectEmployee(
    parentId: string,
    args: Prisma.OrganizationProjectEmployeeFindManyArgs
  ): Promise<OrganizationProjectEmployee[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationProjectEmployee(args);
  }

  async findOrganizationSprint(
    parentId: string,
    args: Prisma.OrganizationSprintFindManyArgs
  ): Promise<OrganizationSprint[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationSprint(args);
  }

  async findOrganizationTaskSetting(
    parentId: string,
    args: Prisma.OrganizationTaskSettingFindManyArgs
  ): Promise<OrganizationTaskSetting[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationTaskSetting(args);
  }

  async findPayment(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payment(args);
  }

  async findTagOrganizationProject(
    parentId: string,
    args: Prisma.TagOrganizationProjectFindManyArgs
  ): Promise<TagOrganizationProject[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tagOrganizationProject(args);
  }

  async findTask(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .task(args);
  }

  async findTaskPriority(
    parentId: string,
    args: Prisma.TaskPriorityFindManyArgs
  ): Promise<TaskPriority[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taskPriority(args);
  }

  async findTaskRelatedIssueType(
    parentId: string,
    args: Prisma.TaskRelatedIssueTypeFindManyArgs
  ): Promise<TaskRelatedIssueType[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taskRelatedIssueType(args);
  }

  async findTaskSize(
    parentId: string,
    args: Prisma.TaskSizeFindManyArgs
  ): Promise<TaskSize[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taskSize(args);
  }

  async findTaskStatus(
    parentId: string,
    args: Prisma.TaskStatusFindManyArgs
  ): Promise<TaskStatus[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taskStatus(args);
  }

  async findTaskVersion(
    parentId: string,
    args: Prisma.TaskVersionFindManyArgs
  ): Promise<TaskVersion[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taskVersion(args);
  }

  async findTimeLog(
    parentId: string,
    args: Prisma.TimeLogFindManyArgs
  ): Promise<TimeLog[]> {
    return this.prisma.organizationProject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .timeLog(args);
  }

  async getImageAsset(parentId: string): Promise<ImageAsset | null> {
    return this.prisma.organizationProject
      .findUnique({
        where: { id: parentId },
      })
      .imageAsset();
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.organizationProject
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.organizationProject
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getOrganizationContact(
    parentId: string
  ): Promise<OrganizationContact | null> {
    return this.prisma.organizationProject
      .findUnique({
        where: { id: parentId },
      })
      .organizationContact();
  }
}