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
import { ProductTypeTranslationWhereInput } from "./ProductTypeTranslationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductTypeTranslationOrderByInput } from "./ProductTypeTranslationOrderByInput";

@ArgsType()
class ProductTypeTranslationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductTypeTranslationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductTypeTranslationWhereInput, { nullable: true })
  @Type(() => ProductTypeTranslationWhereInput)
  where?: ProductTypeTranslationWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductTypeTranslationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductTypeTranslationOrderByInput], { nullable: true })
  @Type(() => ProductTypeTranslationOrderByInput)
  orderBy?: Array<ProductTypeTranslationOrderByInput>;

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

export { ProductTypeTranslationFindManyArgs as ProductTypeTranslationFindManyArgs };