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
import { InviteOrganizationDepartmentWhereUniqueInput } from "./InviteOrganizationDepartmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InviteOrganizationDepartmentUpdateInput } from "./InviteOrganizationDepartmentUpdateInput";

@ArgsType()
class UpdateInviteOrganizationDepartmentArgs {
  @ApiProperty({
    required: true,
    type: () => InviteOrganizationDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentWhereUniqueInput)
  @Field(() => InviteOrganizationDepartmentWhereUniqueInput, {
    nullable: false,
  })
  where!: InviteOrganizationDepartmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InviteOrganizationDepartmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentUpdateInput)
  @Field(() => InviteOrganizationDepartmentUpdateInput, { nullable: false })
  data!: InviteOrganizationDepartmentUpdateInput;
}

export { UpdateInviteOrganizationDepartmentArgs as UpdateInviteOrganizationDepartmentArgs };
