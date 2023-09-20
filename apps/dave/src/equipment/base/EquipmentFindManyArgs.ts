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
import { EquipmentWhereInput } from "./EquipmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EquipmentOrderByInput } from "./EquipmentOrderByInput";

@ArgsType()
class EquipmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EquipmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EquipmentWhereInput, { nullable: true })
  @Type(() => EquipmentWhereInput)
  where?: EquipmentWhereInput;

  @ApiProperty({
    required: false,
    type: [EquipmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EquipmentOrderByInput], { nullable: true })
  @Type(() => EquipmentOrderByInput)
  orderBy?: Array<EquipmentOrderByInput>;

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

export { EquipmentFindManyArgs as EquipmentFindManyArgs };