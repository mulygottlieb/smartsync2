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
import { E3WhereInput } from "./E3WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E3ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E3WhereInput,
  })
  @ValidateNested()
  @Type(() => E3WhereInput)
  @IsOptional()
  @Field(() => E3WhereInput, {
    nullable: true,
  })
  every?: E3WhereInput;

  @ApiProperty({
    required: false,
    type: () => E3WhereInput,
  })
  @ValidateNested()
  @Type(() => E3WhereInput)
  @IsOptional()
  @Field(() => E3WhereInput, {
    nullable: true,
  })
  some?: E3WhereInput;

  @ApiProperty({
    required: false,
    type: () => E3WhereInput,
  })
  @ValidateNested()
  @Type(() => E3WhereInput)
  @IsOptional()
  @Field(() => E3WhereInput, {
    nullable: true,
  })
  none?: E3WhereInput;
}
export { E3ListRelationFilter as E3ListRelationFilter };
