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
import { TagEquipmentWhereInput } from "./TagEquipmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagEquipmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagEquipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentWhereInput)
  @IsOptional()
  @Field(() => TagEquipmentWhereInput, {
    nullable: true,
  })
  every?: TagEquipmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagEquipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentWhereInput)
  @IsOptional()
  @Field(() => TagEquipmentWhereInput, {
    nullable: true,
  })
  some?: TagEquipmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagEquipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentWhereInput)
  @IsOptional()
  @Field(() => TagEquipmentWhereInput, {
    nullable: true,
  })
  none?: TagEquipmentWhereInput;
}
export { TagEquipmentListRelationFilter as TagEquipmentListRelationFilter };