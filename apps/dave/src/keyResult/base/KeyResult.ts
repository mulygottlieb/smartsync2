/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProject } from "../../organizationProject/base/OrganizationProject";
import { GoalKpi } from "../../goalKpi/base/GoalKpi";
import { Employee } from "../../employee/base/Employee";
import { Tenant } from "../../tenant/base/Tenant";
import { Organization } from "../../organization/base/Organization";
import { Task } from "../../task/base/Task";
import { Goal } from "../../goal/base/Goal";
import { KeyResultUpdate } from "../../keyResultUpdate/base/KeyResultUpdate";

@ObjectType()
class KeyResult {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  typeField!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  targetValue!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  initialValue!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unit!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  update!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  progress!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  deadline!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  hardDeadline!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  softDeadline!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  weight!: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationProject,
  })
  @ValidateNested()
  @Type(() => OrganizationProject)
  @IsOptional()
  organizationProject?: OrganizationProject | null;

  @ApiProperty({
    required: false,
    type: () => GoalKpi,
  })
  @ValidateNested()
  @Type(() => GoalKpi)
  @IsOptional()
  goalKpi?: GoalKpi | null;

  @ApiProperty({
    required: true,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  employeeKeyResultOwnerIdToemployee?: Employee;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenant?: Tenant | null;

  @ApiProperty({
    required: false,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employeeKeyResultLeadIdToemployee?: Employee | null;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: false,
    type: () => Task,
  })
  @ValidateNested()
  @Type(() => Task)
  @IsOptional()
  task?: Task | null;

  @ApiProperty({
    required: false,
    type: () => [Goal],
  })
  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goalGoalAlignedKeyResultIdTokeyResult?: Array<Goal>;

  @ApiProperty({
    required: false,
    type: () => Goal,
  })
  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goalKeyResultGoalIdTogoal?: Goal | null;

  @ApiProperty({
    required: false,
    type: () => [KeyResultUpdate],
  })
  @ValidateNested()
  @Type(() => KeyResultUpdate)
  @IsOptional()
  keyResultUpdate?: Array<KeyResultUpdate>;
}

export { KeyResult as KeyResult };