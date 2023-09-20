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
import { RequestApprovalEmployeeWhereUniqueInput } from "./RequestApprovalEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteRequestApprovalEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => RequestApprovalEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalEmployeeWhereUniqueInput)
  @Field(() => RequestApprovalEmployeeWhereUniqueInput, { nullable: false })
  where!: RequestApprovalEmployeeWhereUniqueInput;
}

export { DeleteRequestApprovalEmployeeArgs as DeleteRequestApprovalEmployeeArgs };