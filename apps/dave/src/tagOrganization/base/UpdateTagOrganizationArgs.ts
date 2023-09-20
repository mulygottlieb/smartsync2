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
import { TagOrganizationWhereUniqueInput } from "./TagOrganizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagOrganizationUpdateInput } from "./TagOrganizationUpdateInput";

@ArgsType()
class UpdateTagOrganizationArgs {
  @ApiProperty({
    required: true,
    type: () => TagOrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationWhereUniqueInput)
  @Field(() => TagOrganizationWhereUniqueInput, { nullable: false })
  where!: TagOrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagOrganizationUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagOrganizationUpdateInput)
  @Field(() => TagOrganizationUpdateInput, { nullable: false })
  data!: TagOrganizationUpdateInput;
}

export { UpdateTagOrganizationArgs as UpdateTagOrganizationArgs };