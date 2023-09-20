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
import { TagOrganizationContactWhereInput } from "./TagOrganizationContactWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagOrganizationContactOrderByInput } from "./TagOrganizationContactOrderByInput";

@ArgsType()
class TagOrganizationContactFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagOrganizationContactWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagOrganizationContactWhereInput, { nullable: true })
  @Type(() => TagOrganizationContactWhereInput)
  where?: TagOrganizationContactWhereInput;

  @ApiProperty({
    required: false,
    type: [TagOrganizationContactOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagOrganizationContactOrderByInput], { nullable: true })
  @Type(() => TagOrganizationContactOrderByInput)
  orderBy?: Array<TagOrganizationContactOrderByInput>;

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

export { TagOrganizationContactFindManyArgs as TagOrganizationContactFindManyArgs };
