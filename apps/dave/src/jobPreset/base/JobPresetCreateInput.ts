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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput } from "./EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput";
import { EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput } from "./EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput";
import { JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput } from "./JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput";

@InputType()
class JobPresetCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () => EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput)
  @IsOptional()
  @Field(() => EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput, {
    nullable: true,
  })
  employeeJobPreset?: EmployeeJobPresetCreateNestedManyWithoutJobPresetsInput;

  @ApiProperty({
    required: false,
    type: () =>
      EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput,
  })
  @ValidateNested()
  @Type(
    () => EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput
  )
  @IsOptional()
  @Field(
    () =>
      EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput,
    {
      nullable: true,
    }
  )
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput;

  @ApiProperty({
    required: false,
    type: () =>
      JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput,
  })
  @ValidateNested()
  @Type(
    () =>
      JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput
  )
  @IsOptional()
  @Field(
    () =>
      JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput,
    {
      nullable: true,
    }
  )
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionCreateNestedManyWithoutJobPresetsInput;
}

export { JobPresetCreateInput as JobPresetCreateInput };
