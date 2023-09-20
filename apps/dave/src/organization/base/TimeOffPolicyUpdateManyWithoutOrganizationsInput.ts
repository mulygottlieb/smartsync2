/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TimeOffPolicyWhereUniqueInput } from "../../timeOffPolicy/base/TimeOffPolicyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TimeOffPolicyUpdateManyWithoutOrganizationsInput {
  @Field(() => [TimeOffPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeOffPolicyWhereUniqueInput],
  })
  connect?: Array<TimeOffPolicyWhereUniqueInput>;

  @Field(() => [TimeOffPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeOffPolicyWhereUniqueInput],
  })
  disconnect?: Array<TimeOffPolicyWhereUniqueInput>;

  @Field(() => [TimeOffPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeOffPolicyWhereUniqueInput],
  })
  set?: Array<TimeOffPolicyWhereUniqueInput>;
}

export { TimeOffPolicyUpdateManyWithoutOrganizationsInput as TimeOffPolicyUpdateManyWithoutOrganizationsInput };
