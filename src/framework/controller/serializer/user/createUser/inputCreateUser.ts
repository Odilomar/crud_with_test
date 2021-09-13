import { IsNotEmpty, IsString } from "class-validator";

export class InputCreateUser {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  email!: string;
}
