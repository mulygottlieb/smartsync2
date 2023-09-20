/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationContactEmployeeWhereUniqueInput } from "../../organizationContactEmployee/base/OrganizationContactEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationContactEmployeeUpdateManyWithoutOrganizationContactsInput {
  @Field(() => [OrganizationContactEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactEmployeeWhereUniqueInput],
  })
  connect?: Array<OrganizationContactEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationContactEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactEmployeeWhereUniqueInput],
  })
  disconnect?: Array<OrganizationContactEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationContactEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactEmployeeWhereUniqueInput],
  })
  set?: Array<OrganizationContactEmployeeWhereUniqueInput>;
}

export { OrganizationContactEmployeeUpdateManyWithoutOrganizationContactsInput as OrganizationContactEmployeeUpdateManyWithoutOrganizationContactsInput };