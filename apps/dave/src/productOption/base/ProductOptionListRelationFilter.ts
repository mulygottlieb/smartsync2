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
import { ProductOptionWhereInput } from "./ProductOptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductOptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductOptionWhereInput)
  @IsOptional()
  @Field(() => ProductOptionWhereInput, {
    nullable: true,
  })
  every?: ProductOptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductOptionWhereInput)
  @IsOptional()
  @Field(() => ProductOptionWhereInput, {
    nullable: true,
  })
  some?: ProductOptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductOptionWhereInput)
  @IsOptional()
  @Field(() => ProductOptionWhereInput, {
    nullable: true,
  })
  none?: ProductOptionWhereInput;
}
export { ProductOptionListRelationFilter as ProductOptionListRelationFilter };
