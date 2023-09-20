/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagEquipmentWhereUniqueInput } from "../../tagEquipment/base/TagEquipmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagEquipmentUpdateManyWithoutEquipmentItemsInput {
  @Field(() => [TagEquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEquipmentWhereUniqueInput],
  })
  connect?: Array<TagEquipmentWhereUniqueInput>;

  @Field(() => [TagEquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEquipmentWhereUniqueInput],
  })
  disconnect?: Array<TagEquipmentWhereUniqueInput>;

  @Field(() => [TagEquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagEquipmentWhereUniqueInput],
  })
  set?: Array<TagEquipmentWhereUniqueInput>;
}

export { TagEquipmentUpdateManyWithoutEquipmentItemsInput as TagEquipmentUpdateManyWithoutEquipmentItemsInput };
