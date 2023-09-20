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
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { CandidateUpdateManyWithoutOrganizationPositionsInput } from "./CandidateUpdateManyWithoutOrganizationPositionsInput";
import { EmployeeUpdateManyWithoutOrganizationPositionsInput } from "./EmployeeUpdateManyWithoutOrganizationPositionsInput";
import { TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput } from "./TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput";

@InputType()
class OrganizationPositionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
    type: () => CandidateUpdateManyWithoutOrganizationPositionsInput,
  })
  @ValidateNested()
  @Type(() => CandidateUpdateManyWithoutOrganizationPositionsInput)
  @IsOptional()
  @Field(() => CandidateUpdateManyWithoutOrganizationPositionsInput, {
    nullable: true,
  })
  candidate?: CandidateUpdateManyWithoutOrganizationPositionsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeUpdateManyWithoutOrganizationPositionsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeUpdateManyWithoutOrganizationPositionsInput)
  @IsOptional()
  @Field(() => EmployeeUpdateManyWithoutOrganizationPositionsInput, {
    nullable: true,
  })
  employee?: EmployeeUpdateManyWithoutOrganizationPositionsInput;

  @ApiProperty({
    required: false,
    type: () =>
      TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput,
  })
  @ValidateNested()
  @Type(
    () => TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput
  )
  @IsOptional()
  @Field(
    () => TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput,
    {
      nullable: true,
    }
  )
  tagOrganizationPosition?: TagOrganizationPositionUpdateManyWithoutOrganizationPositionsInput;
}

export { OrganizationPositionUpdateInput as OrganizationPositionUpdateInput };
