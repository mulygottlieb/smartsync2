/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EquipmentSharesEmployeeWhereUniqueInput } from "../../equipmentSharesEmployee/base/EquipmentSharesEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EquipmentSharesEmployeeCreateNestedManyWithoutEmployeesInput {
  @Field(() => [EquipmentSharesEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquipmentSharesEmployeeWhereUniqueInput],
  })
  connect?: Array<EquipmentSharesEmployeeWhereUniqueInput>;
}

export { EquipmentSharesEmployeeCreateNestedManyWithoutEmployeesInput as EquipmentSharesEmployeeCreateNestedManyWithoutEmployeesInput };