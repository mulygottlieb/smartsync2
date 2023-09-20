/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Warehouse } from "../../warehouse/base/Warehouse";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Tag } from "../../tag/base/Tag";

@ObjectType()
class TagWarehouse {
  @ApiProperty({
    required: true,
    type: () => Warehouse,
  })
  @ValidateNested()
  @Type(() => Warehouse)
  warehouse?: Warehouse;

  @ApiProperty({
    required: true,
    type: () => Tag,
  })
  @ValidateNested()
  @Type(() => Tag)
  tag?: Tag;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { TagWarehouse as TagWarehouse };
