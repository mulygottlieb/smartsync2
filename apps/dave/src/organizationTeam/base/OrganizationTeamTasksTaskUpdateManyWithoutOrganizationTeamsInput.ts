/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationTeamTasksTaskWhereUniqueInput } from "../../organizationTeamTasksTask/base/OrganizationTeamTasksTaskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationTeamTasksTaskUpdateManyWithoutOrganizationTeamsInput {
  @Field(() => [OrganizationTeamTasksTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamTasksTaskWhereUniqueInput],
  })
  connect?: Array<OrganizationTeamTasksTaskWhereUniqueInput>;

  @Field(() => [OrganizationTeamTasksTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamTasksTaskWhereUniqueInput],
  })
  disconnect?: Array<OrganizationTeamTasksTaskWhereUniqueInput>;

  @Field(() => [OrganizationTeamTasksTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTeamTasksTaskWhereUniqueInput],
  })
  set?: Array<OrganizationTeamTasksTaskWhereUniqueInput>;
}

export { OrganizationTeamTasksTaskUpdateManyWithoutOrganizationTeamsInput as OrganizationTeamTasksTaskUpdateManyWithoutOrganizationTeamsInput };
