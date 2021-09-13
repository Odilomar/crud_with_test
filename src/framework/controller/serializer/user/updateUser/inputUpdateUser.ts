import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class InputUpdateUser {
  @IsNotEmpty()
  @IsInt()
  id!: string;

  @IsOptional()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  email!: string;
}
