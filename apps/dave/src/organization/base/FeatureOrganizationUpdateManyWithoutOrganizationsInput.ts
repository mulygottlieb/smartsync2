/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FeatureOrganizationWhereUniqueInput } from "../../featureOrganization/base/FeatureOrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FeatureOrganizationUpdateManyWithoutOrganizationsInput {
  @Field(() => [FeatureOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeatureOrganizationWhereUniqueInput],
  })
  connect?: Array<FeatureOrganizationWhereUniqueInput>;

  @Field(() => [FeatureOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeatureOrganizationWhereUniqueInput],
  })
  disconnect?: Array<FeatureOrganizationWhereUniqueInput>;

  @Field(() => [FeatureOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeatureOrganizationWhereUniqueInput],
  })
  set?: Array<FeatureOrganizationWhereUniqueInput>;
}

export { FeatureOrganizationUpdateManyWithoutOrganizationsInput as FeatureOrganizationUpdateManyWithoutOrganizationsInput };
