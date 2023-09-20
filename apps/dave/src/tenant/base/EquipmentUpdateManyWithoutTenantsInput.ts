/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EquipmentWhereUniqueInput } from "../../equipment/base/EquipmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EquipmentUpdateManyWithoutTenantsInput {
  @Field(() => [EquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentWhereUniqueInput],
  })
  connect?: Array<EquipmentWhereUniqueInput>;

  @Field(() => [EquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentWhereUniqueInput],
  })
  disconnect?: Array<EquipmentWhereUniqueInput>;

  @Field(() => [EquipmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentWhereUniqueInput],
  })
  set?: Array<EquipmentWhereUniqueInput>;
}

export { EquipmentUpdateManyWithoutTenantsInput as EquipmentUpdateManyWithoutTenantsInput };
