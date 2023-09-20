/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { IntegrationTenantWhereUniqueInput } from "../../integrationTenant/base/IntegrationTenantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IntegrationTenantUpdateManyWithoutTenantsInput {
  @Field(() => [IntegrationTenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IntegrationTenantWhereUniqueInput],
  })
  connect?: Array<IntegrationTenantWhereUniqueInput>;

  @Field(() => [IntegrationTenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IntegrationTenantWhereUniqueInput],
  })
  disconnect?: Array<IntegrationTenantWhereUniqueInput>;

  @Field(() => [IntegrationTenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IntegrationTenantWhereUniqueInput],
  })
  set?: Array<IntegrationTenantWhereUniqueInput>;
}

export { IntegrationTenantUpdateManyWithoutTenantsInput as IntegrationTenantUpdateManyWithoutTenantsInput };
