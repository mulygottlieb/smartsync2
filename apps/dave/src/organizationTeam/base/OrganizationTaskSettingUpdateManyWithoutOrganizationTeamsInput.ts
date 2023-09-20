/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationTaskSettingWhereUniqueInput } from "../../organizationTaskSetting/base/OrganizationTaskSettingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationTaskSettingUpdateManyWithoutOrganizationTeamsInput {
  @Field(() => [OrganizationTaskSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTaskSettingWhereUniqueInput],
  })
  connect?: Array<OrganizationTaskSettingWhereUniqueInput>;

  @Field(() => [OrganizationTaskSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTaskSettingWhereUniqueInput],
  })
  disconnect?: Array<OrganizationTaskSettingWhereUniqueInput>;

  @Field(() => [OrganizationTaskSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationTaskSettingWhereUniqueInput],
  })
  set?: Array<OrganizationTaskSettingWhereUniqueInput>;
}

export { OrganizationTaskSettingUpdateManyWithoutOrganizationTeamsInput as OrganizationTaskSettingUpdateManyWithoutOrganizationTeamsInput };