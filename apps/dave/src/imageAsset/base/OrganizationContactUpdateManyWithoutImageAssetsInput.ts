/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationContactWhereUniqueInput } from "../../organizationContact/base/OrganizationContactWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationContactUpdateManyWithoutImageAssetsInput {
  @Field(() => [OrganizationContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactWhereUniqueInput],
  })
  connect?: Array<OrganizationContactWhereUniqueInput>;

  @Field(() => [OrganizationContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactWhereUniqueInput],
  })
  disconnect?: Array<OrganizationContactWhereUniqueInput>;

  @Field(() => [OrganizationContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationContactWhereUniqueInput],
  })
  set?: Array<OrganizationContactWhereUniqueInput>;
}

export { OrganizationContactUpdateManyWithoutImageAssetsInput as OrganizationContactUpdateManyWithoutImageAssetsInput };
