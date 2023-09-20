/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EquipmentSharesTeamWhereUniqueInput } from "../../equipmentSharesTeam/base/EquipmentSharesTeamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput {
  @Field(() => [EquipmentSharesTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentSharesTeamWhereUniqueInput],
  })
  connect?: Array<EquipmentSharesTeamWhereUniqueInput>;

  @Field(() => [EquipmentSharesTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentSharesTeamWhereUniqueInput],
  })
  disconnect?: Array<EquipmentSharesTeamWhereUniqueInput>;

  @Field(() => [EquipmentSharesTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentSharesTeamWhereUniqueInput],
  })
  set?: Array<EquipmentSharesTeamWhereUniqueInput>;
}

export { EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput as EquipmentSharesTeamUpdateManyWithoutEquipmentSharingsInput };
