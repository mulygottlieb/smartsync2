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
import { OrganizationProjectWhereInput } from "./OrganizationProjectWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrganizationProjectCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationProjectWhereInput,
  })
  @Field(() => OrganizationProjectWhereInput, { nullable: true })
  @Type(() => OrganizationProjectWhereInput)
  where?: OrganizationProjectWhereInput;
}

export { OrganizationProjectCountArgs as OrganizationProjectCountArgs };
