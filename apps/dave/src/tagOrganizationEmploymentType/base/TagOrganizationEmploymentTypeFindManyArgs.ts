/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TagOrganizationEmploymentTypeWhereInput } from "./TagOrganizationEmploymentTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagOrganizationEmploymentTypeOrderByInput } from "./TagOrganizationEmploymentTypeOrderByInput";

@ArgsType()
class TagOrganizationEmploymentTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagOrganizationEmploymentTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagOrganizationEmploymentTypeWhereInput, { nullable: true })
  @Type(() => TagOrganizationEmploymentTypeWhereInput)
  where?: TagOrganizationEmploymentTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [TagOrganizationEmploymentTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagOrganizationEmploymentTypeOrderByInput], { nullable: true })
  @Type(() => TagOrganizationEmploymentTypeOrderByInput)
  orderBy?: Array<TagOrganizationEmploymentTypeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TagOrganizationEmploymentTypeFindManyArgs as TagOrganizationEmploymentTypeFindManyArgs };