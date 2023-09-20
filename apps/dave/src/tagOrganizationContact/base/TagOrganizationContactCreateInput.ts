/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationContactWhereUniqueInput } from "../../organizationContact/base/OrganizationContactWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

@InputType()
class TagOrganizationContactCreateInput {
  @ApiProperty({
    required: true,
    type: () => OrganizationContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationContactWhereUniqueInput)
  @Field(() => OrganizationContactWhereUniqueInput)
  organizationContact!: OrganizationContactWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @Field(() => TagWhereUniqueInput)
  tag!: TagWhereUniqueInput;
}

export { TagOrganizationContactCreateInput as TagOrganizationContactCreateInput };