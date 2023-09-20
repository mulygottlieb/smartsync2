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
import { OrganizationProjectWhereUniqueInput } from "./OrganizationProjectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProjectUpdateInput } from "./OrganizationProjectUpdateInput";

@ArgsType()
class UpdateOrganizationProjectArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectWhereUniqueInput)
  @Field(() => OrganizationProjectWhereUniqueInput, { nullable: false })
  where!: OrganizationProjectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationProjectUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectUpdateInput)
  @Field(() => OrganizationProjectUpdateInput, { nullable: false })
  data!: OrganizationProjectUpdateInput;
}

export { UpdateOrganizationProjectArgs as UpdateOrganizationProjectArgs };
