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
import { UserOrganizationWhereUniqueInput } from "./UserOrganizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserOrganizationUpdateInput } from "./UserOrganizationUpdateInput";

@ArgsType()
class UpdateUserOrganizationArgs {
  @ApiProperty({
    required: true,
    type: () => UserOrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserOrganizationWhereUniqueInput)
  @Field(() => UserOrganizationWhereUniqueInput, { nullable: false })
  where!: UserOrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserOrganizationUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserOrganizationUpdateInput)
  @Field(() => UserOrganizationUpdateInput, { nullable: false })
  data!: UserOrganizationUpdateInput;
}

export { UpdateUserOrganizationArgs as UpdateUserOrganizationArgs };