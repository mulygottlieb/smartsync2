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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { OrganizationContactWhereUniqueInput } from "../../organizationContact/base/OrganizationContactWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PipelineStageWhereUniqueInput } from "../../pipelineStage/base/PipelineStageWhereUniqueInput";

@InputType()
class DealUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  probability?: number;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PipelineStageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PipelineStageWhereUniqueInput)
  @IsOptional()
  @Field(() => PipelineStageWhereUniqueInput, {
    nullable: true,
  })
  pipelineStage?: PipelineStageWhereUniqueInput;
}

export { DealUpdateInput as DealUpdateInput };