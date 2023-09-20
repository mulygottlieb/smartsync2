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
  IsDate,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationTeamWhereUniqueInput } from "../../organizationTeam/base/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../../organizationProject/base/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../../organizationContact/base/OrganizationContactWhereUniqueInput";
import { TimesheetWhereUniqueInput } from "../../timesheet/base/TimesheetWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput } from "./TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput";

@InputType()
class TimeLogCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startedAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  stoppedAt?: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  logType!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  source!: string;

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
  reason?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isBillable!: boolean;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRunning?: boolean | null;

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
    type: () => OrganizationTeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationTeamWhereUniqueInput, {
    nullable: true,
  })
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;

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
    required: true,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @Field(() => EmployeeWhereUniqueInput)
  employee!: EmployeeWhereUniqueInput;

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
    type: () => OrganizationContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationContactWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationContactWhereUniqueInput, {
    nullable: true,
  })
  organizationContact?: OrganizationContactWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TimesheetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimesheetWhereUniqueInput)
  @IsOptional()
  @Field(() => TimesheetWhereUniqueInput, {
    nullable: true,
  })
  timesheet?: TimesheetWhereUniqueInput | null;

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
    type: () => TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput)
  @IsOptional()
  @Field(() => TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput, {
    nullable: true,
  })
  timeSlotTimeLogs?: TimeSlotTimeLogCreateNestedManyWithoutTimeLogsInput;
}

export { TimeLogCreateInput as TimeLogCreateInput };