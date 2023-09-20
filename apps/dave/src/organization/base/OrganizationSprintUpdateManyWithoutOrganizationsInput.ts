/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationSprintWhereUniqueInput } from "../../organizationSprint/base/OrganizationSprintWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationSprintUpdateManyWithoutOrganizationsInput {
  @Field(() => [OrganizationSprintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationSprintWhereUniqueInput],
  })
  connect?: Array<OrganizationSprintWhereUniqueInput>;

  @Field(() => [OrganizationSprintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationSprintWhereUniqueInput],
  })
  disconnect?: Array<OrganizationSprintWhereUniqueInput>;

  @Field(() => [OrganizationSprintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationSprintWhereUniqueInput],
  })
  set?: Array<OrganizationSprintWhereUniqueInput>;
}

export { OrganizationSprintUpdateManyWithoutOrganizationsInput as OrganizationSprintUpdateManyWithoutOrganizationsInput };
