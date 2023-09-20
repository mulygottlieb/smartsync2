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
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput } from "./EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { GoalCreateNestedManyWithoutOrganizationTeamsInput } from "./GoalCreateNestedManyWithoutOrganizationTeamsInput";
import { InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput } from "./InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput";
import { IssueTypeCreateNestedManyWithoutOrganizationTeamsInput } from "./IssueTypeCreateNestedManyWithoutOrganizationTeamsInput";
import { OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput } from "./OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput";
import { OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput } from "./OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput";
import { OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput } from "./OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput";
import { OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput } from "./OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput";
import { RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput } from "./RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput";
import { TagCreateNestedManyWithoutOrganizationTeamsInput } from "./TagCreateNestedManyWithoutOrganizationTeamsInput";
import { TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput } from "./TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskSizeCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskSizeCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskStatusCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskStatusCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskTeamCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskTeamCreateNestedManyWithoutOrganizationTeamsInput";
import { TaskVersionCreateNestedManyWithoutOrganizationTeamsInput } from "./TaskVersionCreateNestedManyWithoutOrganizationTeamsInput";
import { TimeLogCreateNestedManyWithoutOrganizationTeamsInput } from "./TimeLogCreateNestedManyWithoutOrganizationTeamsInput";

@InputType()
class OrganizationTeamCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profileLink?: string | null;

  @ApiProperty({
    required: false,
    type: () =>
      EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(
    () => EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  equipmentSharesTeams?: EquipmentSharesTeamCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emoji?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  teamSize?: string | null;

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
    type: () => ImageAssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageAssetWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageAssetWhereUniqueInput, {
    nullable: true,
  })
  imageAsset?: ImageAssetWhereUniqueInput | null;

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
    type: () => GoalCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => GoalCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => GoalCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  goal?: GoalCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(
    () => InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput
  )
  @IsOptional()
  @Field(
    () => InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  inviteOrganizationTeam?: InviteOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => IssueTypeCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => IssueTypeCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  issueType?: IssueTypeCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(
    () => OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput
  )
  @IsOptional()
  @Field(
    () => OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  organizationTaskSetting?: OrganizationTaskSettingCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(
    () => OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput
  )
  @IsOptional()
  @Field(
    () => OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  organizationTeamEmployee?: OrganizationTeamEmployeeCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(
    () =>
      OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput
  )
  @IsOptional()
  @Field(
    () =>
      OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  organizationTeamJoinRequest?: OrganizationTeamJoinRequestCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(
    () => OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput
  )
  @IsOptional()
  @Field(
    () =>
      OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  organizationTeamTasksTask?: OrganizationTeamTasksTaskCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(
    () => RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  requestApprovalTeam?: RequestApprovalTeamCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TagCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TagCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TagCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  tag?: TagCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(
    () => TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  tagOrganizationTeam?: TagOrganizationTeamCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  taskPriority?: TaskPriorityCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () =>
      TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(
    () => TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput,
    {
      nullable: true,
    }
  )
  taskRelatedIssueType?: TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TaskSizeCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskSizeCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TaskSizeCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  taskSize?: TaskSizeCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TaskStatusCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskStatusCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TaskStatusCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  taskStatus?: TaskStatusCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TaskTeamCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskTeamCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TaskTeamCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  taskTeam?: TaskTeamCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TaskVersionCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TaskVersionCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TaskVersionCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  taskVersion?: TaskVersionCreateNestedManyWithoutOrganizationTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TimeLogCreateNestedManyWithoutOrganizationTeamsInput,
  })
  @ValidateNested()
  @Type(() => TimeLogCreateNestedManyWithoutOrganizationTeamsInput)
  @IsOptional()
  @Field(() => TimeLogCreateNestedManyWithoutOrganizationTeamsInput, {
    nullable: true,
  })
  timeLog?: TimeLogCreateNestedManyWithoutOrganizationTeamsInput;
}

export { OrganizationTeamCreateInput as OrganizationTeamCreateInput };