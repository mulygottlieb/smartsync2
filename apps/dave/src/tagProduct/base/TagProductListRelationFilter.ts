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
import { TagProductWhereInput } from "./TagProductWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagProductListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagProductWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProductWhereInput)
  @IsOptional()
  @Field(() => TagProductWhereInput, {
    nullable: true,
  })
  every?: TagProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagProductWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProductWhereInput)
  @IsOptional()
  @Field(() => TagProductWhereInput, {
    nullable: true,
  })
  some?: TagProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagProductWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProductWhereInput)
  @IsOptional()
  @Field(() => TagProductWhereInput, {
    nullable: true,
  })
  none?: TagProductWhereInput;
}
export { TagProductListRelationFilter as TagProductListRelationFilter };
