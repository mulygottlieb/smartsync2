/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationProject } from "../../organizationProject/base/OrganizationProject";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Employee } from "../../employee/base/Employee";

@ObjectType()
class OrganizationProjectEmployee {
  @ApiProperty({
    required: true,
    type: () => OrganizationProject,
  })
  @ValidateNested()
  @Type(() => OrganizationProject)
  organizationProject?: OrganizationProject;

  @ApiProperty({
    required: true,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  employee?: Employee;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { OrganizationProjectEmployee as OrganizationProjectEmployee };
