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
import { OrganizationProjectEmployeeWhereInput } from "./OrganizationProjectEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizationProjectEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizationProjectEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectEmployeeWhereInput)
  @IsOptional()
  @Field(() => OrganizationProjectEmployeeWhereInput, {
    nullable: true,
  })
  every?: OrganizationProjectEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationProjectEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectEmployeeWhereInput)
  @IsOptional()
  @Field(() => OrganizationProjectEmployeeWhereInput, {
    nullable: true,
  })
  some?: OrganizationProjectEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationProjectEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationProjectEmployeeWhereInput)
  @IsOptional()
  @Field(() => OrganizationProjectEmployeeWhereInput, {
    nullable: true,
  })
  none?: OrganizationProjectEmployeeWhereInput;
}
export { OrganizationProjectEmployeeListRelationFilter as OrganizationProjectEmployeeListRelationFilter };
