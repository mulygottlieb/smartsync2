/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationTeamWhereUniqueInput } from "../../organizationTeam/base/OrganizationTeamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationTeamUpdateManyWithoutImageAssetsInput {
  @Field(() => [OrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamWhereUniqueInput],
  })
  connect?: Array<OrganizationTeamWhereUniqueInput>;

  @Field(() => [OrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamWhereUniqueInput],
  })
  disconnect?: Array<OrganizationTeamWhereUniqueInput>;

  @Field(() => [OrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamWhereUniqueInput],
  })
  set?: Array<OrganizationTeamWhereUniqueInput>;
}

export { OrganizationTeamUpdateManyWithoutImageAssetsInput as OrganizationTeamUpdateManyWithoutImageAssetsInput };