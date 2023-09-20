/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagRequestApprovalWhereUniqueInput } from "../../tagRequestApproval/base/TagRequestApprovalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagRequestApprovalUpdateManyWithoutRequestApprovalsInput {
  @Field(() => [TagRequestApprovalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagRequestApprovalWhereUniqueInput],
  })
  connect?: Array<TagRequestApprovalWhereUniqueInput>;

  @Field(() => [TagRequestApprovalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagRequestApprovalWhereUniqueInput],
  })
  disconnect?: Array<TagRequestApprovalWhereUniqueInput>;

  @Field(() => [TagRequestApprovalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagRequestApprovalWhereUniqueInput],
  })
  set?: Array<TagRequestApprovalWhereUniqueInput>;
}

export { TagRequestApprovalUpdateManyWithoutRequestApprovalsInput as TagRequestApprovalUpdateManyWithoutRequestApprovalsInput };
