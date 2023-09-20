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
import { TagOrganizationExpenseCategoryWhereInput } from "./TagOrganizationExpenseCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagOrganizationExpenseCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagOrganizationExpenseCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationExpenseCategoryWhereInput)
  @IsOptional()
  @Field(() => TagOrganizationExpenseCategoryWhereInput, {
    nullable: true,
  })
  every?: TagOrganizationExpenseCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationExpenseCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationExpenseCategoryWhereInput)
  @IsOptional()
  @Field(() => TagOrganizationExpenseCategoryWhereInput, {
    nullable: true,
  })
  some?: TagOrganizationExpenseCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagOrganizationExpenseCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationExpenseCategoryWhereInput)
  @IsOptional()
  @Field(() => TagOrganizationExpenseCategoryWhereInput, {
    nullable: true,
  })
  none?: TagOrganizationExpenseCategoryWhereInput;
}
export { TagOrganizationExpenseCategoryListRelationFilter as TagOrganizationExpenseCategoryListRelationFilter };
