/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationAwardWhereUniqueInput } from "../../organizationAward/base/OrganizationAwardWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationAwardUpdateManyWithoutOrganizationsInput {
  @Field(() => [OrganizationAwardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationAwardWhereUniqueInput],
  })
  connect?: Array<OrganizationAwardWhereUniqueInput>;

  @Field(() => [OrganizationAwardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationAwardWhereUniqueInput],
  })
  disconnect?: Array<OrganizationAwardWhereUniqueInput>;

  @Field(() => [OrganizationAwardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationAwardWhereUniqueInput],
  })
  set?: Array<OrganizationAwardWhereUniqueInput>;
}

export { OrganizationAwardUpdateManyWithoutOrganizationsInput as OrganizationAwardUpdateManyWithoutOrganizationsInput };
