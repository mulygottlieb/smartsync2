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
import { EquipmentSharesTeamWhereInput } from "./EquipmentSharesTeamWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EquipmentSharesTeamCountArgs {
  @ApiProperty({
    required: false,
    type: () => EquipmentSharesTeamWhereInput,
  })
  @Field(() => EquipmentSharesTeamWhereInput, { nullable: true })
  @Type(() => EquipmentSharesTeamWhereInput)
  where?: EquipmentSharesTeamWhereInput;
}

export { EquipmentSharesTeamCountArgs as EquipmentSharesTeamCountArgs };
