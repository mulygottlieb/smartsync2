/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationProjectEmployeeWhereUniqueInput } from "../../organizationProjectEmployee/base/OrganizationProjectEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationProjectEmployeeUpdateManyWithoutOrganizationProjectsInput {
  @Field(() => [OrganizationProjectEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationProjectEmployeeWhereUniqueInput],
  })
  connect?: Array<OrganizationProjectEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationProjectEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationProjectEmployeeWhereUniqueInput],
  })
  disconnect?: Array<OrganizationProjectEmployeeWhereUniqueInput>;

  @Field(() => [OrganizationProjectEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationProjectEmployeeWhereUniqueInput],
  })
  set?: Array<OrganizationProjectEmployeeWhereUniqueInput>;
}

export { OrganizationProjectEmployeeUpdateManyWithoutOrganizationProjectsInput as OrganizationProjectEmployeeUpdateManyWithoutOrganizationProjectsInput };
