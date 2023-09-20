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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { JobPresetWhereUniqueInput } from "../../jobPreset/base/JobPresetWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { JobSearchOccupationWhereUniqueInput } from "../../jobSearchOccupation/base/JobSearchOccupationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { JobSearchCategoryWhereUniqueInput } from "../../jobSearchCategory/base/JobSearchCategoryWhereUniqueInput";

@InputType()
class EmployeeUpworkJobSearchCriterionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyword?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  jobType?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobPresetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobPresetWhereUniqueInput)
  @IsOptional()
  @Field(() => JobPresetWhereUniqueInput, {
    nullable: true,
  })
  jobPreset?: JobPresetWhereUniqueInput | null;

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
    type: () => JobSearchOccupationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobSearchOccupationWhereUniqueInput)
  @IsOptional()
  @Field(() => JobSearchOccupationWhereUniqueInput, {
    nullable: true,
  })
  jobSearchOccupation?: JobSearchOccupationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => JobSearchCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobSearchCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => JobSearchCategoryWhereUniqueInput, {
    nullable: true,
  })
  jobSearchCategory?: JobSearchCategoryWhereUniqueInput | null;
}

export { EmployeeUpworkJobSearchCriterionUpdateInput as EmployeeUpworkJobSearchCriterionUpdateInput };
