/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { WarehouseProduct } from "../../warehouseProduct/base/WarehouseProduct";
import { Tenant } from "../../tenant/base/Tenant";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { Organization } from "../../organization/base/Organization";

@ObjectType()
class WarehouseProductVariant {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  quantity!: Decimal | null;

  @ApiProperty({
    required: true,
    type: () => WarehouseProduct,
  })
  @ValidateNested()
  @Type(() => WarehouseProduct)
  warehouseProduct?: WarehouseProduct;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenant?: Tenant | null;

  @ApiProperty({
    required: true,
    type: () => ProductVariant,
  })
  @ValidateNested()
  @Type(() => ProductVariant)
  productVariant?: ProductVariant;

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;
}

export { WarehouseProductVariant as WarehouseProductVariant };