/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsInt,
  IsDate,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationSprintWhereUniqueInput } from "../../organizationSprint/base/OrganizationSprintWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../../organizationProject/base/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ActivityCreateNestedManyWithoutTasksInput } from "./ActivityCreateNestedManyWithoutTasksInput";
import { EmployeeTasksTaskCreateNestedManyWithoutTasksInput } from "./EmployeeTasksTaskCreateNestedManyWithoutTasksInput";
import { InvoiceItemCreateNestedManyWithoutTasksInput } from "./InvoiceItemCreateNestedManyWithoutTasksInput";
import { KeyResultCreateNestedManyWithoutTasksInput } from "./KeyResultCreateNestedManyWithoutTasksInput";
import { OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput } from "./OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput";
import { TagTaskCreateNestedManyWithoutTasksInput } from "./TagTaskCreateNestedManyWithoutTasksInput";
import { TaskCreateNestedManyWithoutTasksInput } from "./TaskCreateNestedManyWithoutTasksInput";
import { TaskEmployeeCreateNestedManyWithoutTasksInput } from "./TaskEmployeeCreateNestedManyWithoutTasksInput";
import { TaskLinkedIssueCreateNestedManyWithoutTasksInput } from "./TaskLinkedIssueCreateNestedManyWithoutTasksInput";
import { TaskTeamCreateNestedManyWithoutTasksInput } from "./TaskTeamCreateNestedManyWithoutTasksInput";
import { TimeLogCreateNestedManyWithoutTasksInput } from "./TimeLogCreateNestedManyWithoutTasksInput";

@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimate?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberField?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  prefix?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  priority?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  publicField?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  resolvedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  version?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  issueType?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationSprintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationSprintWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationSprintWhereUniqueInput, {
    nullable: true,
  })
  organizationSprint?: OrganizationSprintWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationProjectWhereUniqueInput, {
    nullable: true,
  })
  organizationProject?: OrganizationProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ActivityCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => ActivityCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => ActivityCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  activity?: ActivityCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeTasksTaskCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => EmployeeTasksTaskCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => EmployeeTasksTaskCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  employeeTasksTask?: EmployeeTasksTaskCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceItemCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => InvoiceItemCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => InvoiceItemCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  invoiceItem?: InvoiceItemCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => KeyResultCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => KeyResultCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => KeyResultCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  keyResult?: KeyResultCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  organizationTeamTasksTask?: OrganizationTeamTasksTaskCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TagTaskCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TagTaskCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TagTaskCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  tagTask?: TagTaskCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TaskCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  otherTask?: TaskCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TaskEmployeeCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskEmployeeCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TaskEmployeeCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  taskEmployee?: TaskEmployeeCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TaskLinkedIssueCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskLinkedIssueCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TaskLinkedIssueCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  taskLinkedIssuesTaskLinkedIssuesTaskToIdTotask?: TaskLinkedIssueCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TaskLinkedIssueCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskLinkedIssueCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TaskLinkedIssueCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  taskLinkedIssuesTaskLinkedIssuesTaskFromIdTotask?: TaskLinkedIssueCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TaskTeamCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskTeamCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TaskTeamCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  taskTeam?: TaskTeamCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: () => TimeLogCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => TimeLogCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => TimeLogCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  timeLog?: TimeLogCreateNestedManyWithoutTasksInput;
}

export { TaskCreateInput as TaskCreateInput };