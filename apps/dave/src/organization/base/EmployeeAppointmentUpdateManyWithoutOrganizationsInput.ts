/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeAppointmentWhereUniqueInput } from "../../employeeAppointment/base/EmployeeAppointmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeAppointmentUpdateManyWithoutOrganizationsInput {
  @Field(() => [EmployeeAppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeAppointmentWhereUniqueInput],
  })
  connect?: Array<EmployeeAppointmentWhereUniqueInput>;

  @Field(() => [EmployeeAppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeAppointmentWhereUniqueInput],
  })
  disconnect?: Array<EmployeeAppointmentWhereUniqueInput>;

  @Field(() => [EmployeeAppointmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeAppointmentWhereUniqueInput],
  })
  set?: Array<EmployeeAppointmentWhereUniqueInput>;
}

export { EmployeeAppointmentUpdateManyWithoutOrganizationsInput as EmployeeAppointmentUpdateManyWithoutOrganizationsInput };
