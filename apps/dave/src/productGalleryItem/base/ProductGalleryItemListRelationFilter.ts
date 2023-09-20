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
import { ProductGalleryItemWhereInput } from "./ProductGalleryItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductGalleryItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductGalleryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductGalleryItemWhereInput)
  @IsOptional()
  @Field(() => ProductGalleryItemWhereInput, {
    nullable: true,
  })
  every?: ProductGalleryItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductGalleryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductGalleryItemWhereInput)
  @IsOptional()
  @Field(() => ProductGalleryItemWhereInput, {
    nullable: true,
  })
  some?: ProductGalleryItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductGalleryItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductGalleryItemWhereInput)
  @IsOptional()
  @Field(() => ProductGalleryItemWhereInput, {
    nullable: true,
  })
  none?: ProductGalleryItemWhereInput;
}
export { ProductGalleryItemListRelationFilter as ProductGalleryItemListRelationFilter };
