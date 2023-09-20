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
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class ProductGalleryItemCreateInput {
  @ApiProperty({
    required: true,
    type: () => ImageAssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageAssetWhereUniqueInput)
  @Field(() => ImageAssetWhereUniqueInput)
  imageAsset!: ImageAssetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput)
  product!: ProductWhereUniqueInput;
}

export { ProductGalleryItemCreateInput as ProductGalleryItemCreateInput };