/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReportOrganizationWhereUniqueInput } from "../../reportOrganization/base/ReportOrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReportOrganizationUpdateManyWithoutOrganizationsInput {
  @Field(() => [ReportOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportOrganizationWhereUniqueInput],
  })
  connect?: Array<ReportOrganizationWhereUniqueInput>;

  @Field(() => [ReportOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportOrganizationWhereUniqueInput],
  })
  disconnect?: Array<ReportOrganizationWhereUniqueInput>;

  @Field(() => [ReportOrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportOrganizationWhereUniqueInput],
  })
  set?: Array<ReportOrganizationWhereUniqueInput>;
}

export { ReportOrganizationUpdateManyWithoutOrganizationsInput as ReportOrganizationUpdateManyWithoutOrganizationsInput };
