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
import { TagEquipmentWhereUniqueInput } from "./TagEquipmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagEquipmentUpdateInput } from "./TagEquipmentUpdateInput";

@ArgsType()
class UpdateTagEquipmentArgs {
  @ApiProperty({
    required: true,
    type: () => TagEquipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentWhereUniqueInput)
  @Field(() => TagEquipmentWhereUniqueInput, { nullable: false })
  where!: TagEquipmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagEquipmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagEquipmentUpdateInput)
  @Field(() => TagEquipmentUpdateInput, { nullable: false })
  data!: TagEquipmentUpdateInput;
}

export { UpdateTagEquipmentArgs as UpdateTagEquipmentArgs };