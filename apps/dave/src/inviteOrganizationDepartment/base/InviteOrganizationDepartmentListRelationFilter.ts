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
import { InviteOrganizationDepartmentWhereInput } from "./InviteOrganizationDepartmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InviteOrganizationDepartmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InviteOrganizationDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentWhereInput)
  @IsOptional()
  @Field(() => InviteOrganizationDepartmentWhereInput, {
    nullable: true,
  })
  every?: InviteOrganizationDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentWhereInput)
  @IsOptional()
  @Field(() => InviteOrganizationDepartmentWhereInput, {
    nullable: true,
  })
  some?: InviteOrganizationDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => InviteOrganizationDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => InviteOrganizationDepartmentWhereInput)
  @IsOptional()
  @Field(() => InviteOrganizationDepartmentWhereInput, {
    nullable: true,
  })
  none?: InviteOrganizationDepartmentWhereInput;
}
export { InviteOrganizationDepartmentListRelationFilter as InviteOrganizationDepartmentListRelationFilter };
