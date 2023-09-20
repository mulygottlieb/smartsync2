/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationDepartmentWhereUniqueInput } from "../../organizationDepartment/base/OrganizationDepartmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";

@InputType()
class CandidateDepartmentCreateInput {
  @ApiProperty({
    required: true,
    type: () => OrganizationDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationDepartmentWhereUniqueInput)
  @Field(() => OrganizationDepartmentWhereUniqueInput)
  organizationDepartment!: OrganizationDepartmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CandidateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateWhereUniqueInput)
  @Field(() => CandidateWhereUniqueInput)
  candidate!: CandidateWhereUniqueInput;
}

export { CandidateDepartmentCreateInput as CandidateDepartmentCreateInput };