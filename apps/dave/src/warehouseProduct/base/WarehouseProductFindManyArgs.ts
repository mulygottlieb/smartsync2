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
import { WarehouseProductWhereInput } from "./WarehouseProductWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WarehouseProductOrderByInput } from "./WarehouseProductOrderByInput";

@ArgsType()
class WarehouseProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WarehouseProductWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WarehouseProductWhereInput, { nullable: true })
  @Type(() => WarehouseProductWhereInput)
  where?: WarehouseProductWhereInput;

  @ApiProperty({
    required: false,
    type: [WarehouseProductOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WarehouseProductOrderByInput], { nullable: true })
  @Type(() => WarehouseProductOrderByInput)
  orderBy?: Array<WarehouseProductOrderByInput>;

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

export { WarehouseProductFindManyArgs as WarehouseProductFindManyArgs };