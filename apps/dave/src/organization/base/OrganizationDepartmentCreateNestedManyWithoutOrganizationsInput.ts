/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationDepartmentWhereUniqueInput } from "../../organizationDepartment/base/OrganizationDepartmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationDepartmentCreateNestedManyWithoutOrganizationsInput {
  @Field(() => [OrganizationDepartmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationDepartmentWhereUniqueInput],
  })
  connect?: Array<OrganizationDepartmentWhereUniqueInput>;
}

export { OrganizationDepartmentCreateNestedManyWithoutOrganizationsInput as OrganizationDepartmentCreateNestedManyWithoutOrganizationsInput };
