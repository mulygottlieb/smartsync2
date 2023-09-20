/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApprovalPolicyWhereUniqueInput } from "../../approvalPolicy/base/ApprovalPolicyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ApprovalPolicyUpdateManyWithoutOrganizationsInput {
  @Field(() => [ApprovalPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApprovalPolicyWhereUniqueInput],
  })
  connect?: Array<ApprovalPolicyWhereUniqueInput>;

  @Field(() => [ApprovalPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApprovalPolicyWhereUniqueInput],
  })
  disconnect?: Array<ApprovalPolicyWhereUniqueInput>;

  @Field(() => [ApprovalPolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApprovalPolicyWhereUniqueInput],
  })
  set?: Array<ApprovalPolicyWhereUniqueInput>;
}

export { ApprovalPolicyUpdateManyWithoutOrganizationsInput as ApprovalPolicyUpdateManyWithoutOrganizationsInput };