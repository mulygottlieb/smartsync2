/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationProjectEmployeeWhereUniqueInput } from "./OrganizationProjectEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProjectEmployeeUpdateInput } from "./OrganizationProjectEmployeeUpdateInput";

@ArgsType()
class UpdateOrganizationProjectEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => OrganizationProjectEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectEmployeeWhereUniqueInput)
  @Field(() => OrganizationProjectEmployeeWhereUniqueInput, { nullable: false })
  where!: OrganizationProjectEmployeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganizationProjectEmployeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectEmployeeUpdateInput)
  @Field(() => OrganizationProjectEmployeeUpdateInput, { nullable: false })
  data!: OrganizationProjectEmployeeUpdateInput;
}

export { UpdateOrganizationProjectEmployeeArgs as UpdateOrganizationProjectEmployeeArgs };
