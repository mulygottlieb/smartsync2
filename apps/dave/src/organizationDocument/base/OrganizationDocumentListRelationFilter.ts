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
import { OrganizationDocumentWhereInput } from "./OrganizationDocumentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizationDocumentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizationDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationDocumentWhereInput)
  @IsOptional()
  @Field(() => OrganizationDocumentWhereInput, {
    nullable: true,
  })
  every?: OrganizationDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationDocumentWhereInput)
  @IsOptional()
  @Field(() => OrganizationDocumentWhereInput, {
    nullable: true,
  })
  some?: OrganizationDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationDocumentWhereInput)
  @IsOptional()
  @Field(() => OrganizationDocumentWhereInput, {
    nullable: true,
  })
  none?: OrganizationDocumentWhereInput;
}
export { OrganizationDocumentListRelationFilter as OrganizationDocumentListRelationFilter };
