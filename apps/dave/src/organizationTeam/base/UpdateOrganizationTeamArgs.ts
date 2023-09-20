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
import { OrganizationTeamWhereUniqueInput } from "./OrganizationTeamWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationTeamUpdateInput } from "./OrganizationTeamUpdateInput";

@ArgsType()
class UpdateOrganizationTeamArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationTeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamWhereUniqueInput)
  @Field(() => OrganizationTeamWhereUniqueInput, { nullable: false })
  where!: OrganizationTeamWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationTeamUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamUpdateInput)
  @Field(() => OrganizationTeamUpdateInput, { nullable: false })
  data!: OrganizationTeamUpdateInput;
}

export { UpdateOrganizationTeamArgs as UpdateOrganizationTeamArgs };
