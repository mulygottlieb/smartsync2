/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagOrganizationTeamWhereUniqueInput } from "../../tagOrganizationTeam/base/TagOrganizationTeamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagOrganizationTeamUpdateManyWithoutTagsInput {
  @Field(() => [TagOrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationTeamWhereUniqueInput],
  })
  connect?: Array<TagOrganizationTeamWhereUniqueInput>;

  @Field(() => [TagOrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationTeamWhereUniqueInput],
  })
  disconnect?: Array<TagOrganizationTeamWhereUniqueInput>;

  @Field(() => [TagOrganizationTeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagOrganizationTeamWhereUniqueInput],
  })
  set?: Array<TagOrganizationTeamWhereUniqueInput>;
}

export { TagOrganizationTeamUpdateManyWithoutTagsInput as TagOrganizationTeamUpdateManyWithoutTagsInput };