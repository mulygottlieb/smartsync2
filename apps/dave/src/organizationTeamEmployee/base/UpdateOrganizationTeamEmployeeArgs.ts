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
import { OrganizationTeamEmployeeWhereUniqueInput } from "./OrganizationTeamEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationTeamEmployeeUpdateInput } from "./OrganizationTeamEmployeeUpdateInput";

@ArgsType()
class UpdateOrganizationTeamEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationTeamEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamEmployeeWhereUniqueInput)
  @Field(() => OrganizationTeamEmployeeWhereUniqueInput, { nullable: false })
  where!: OrganizationTeamEmployeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationTeamEmployeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationTeamEmployeeUpdateInput)
  @Field(() => OrganizationTeamEmployeeUpdateInput, { nullable: false })
  data!: OrganizationTeamEmployeeUpdateInput;
}

export { UpdateOrganizationTeamEmployeeArgs as UpdateOrganizationTeamEmployeeArgs };
