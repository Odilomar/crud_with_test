import { IsInt, IsOptional, IsString } from "class-validator";

export class InputGetUsers {
  @IsOptional()
  @IsInt()
  id!: string;

  @IsOptional()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  email!: string;
}
