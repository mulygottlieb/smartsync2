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
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Organization } from "../../organization/base/Organization";
import { Tenant } from "../../tenant/base/Tenant";
import { EmployeeUpworkJobSearchCriterion } from "../../employeeUpworkJobSearchCriterion/base/EmployeeUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterion } from "../../jobPresetUpworkJobSearchCriterion/base/JobPresetUpworkJobSearchCriterion";

@ObjectType()
class JobSearchOccupation {
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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  jobSourceOccupationId!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  jobSource!: string;

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
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenant?: Tenant | null;

  @ApiProperty({
    required: false,
    type: () => [EmployeeUpworkJobSearchCriterion],
  })
  @ValidateNested()
  @Type(() => EmployeeUpworkJobSearchCriterion)
  @IsOptional()
  employeeUpworkJobSearchCriterion?: Array<EmployeeUpworkJobSearchCriterion>;

  @ApiProperty({
    required: false,
    type: () => [JobPresetUpworkJobSearchCriterion],
  })
  @ValidateNested()
  @Type(() => JobPresetUpworkJobSearchCriterion)
  @IsOptional()
  jobPresetUpworkJobSearchCriterion?: Array<JobPresetUpworkJobSearchCriterion>;
}

export { JobSearchOccupation as JobSearchOccupation };
