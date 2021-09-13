import { IsInt, IsNotEmpty } from "class-validator";

export class InputDeleteUser {
  @IsNotEmpty()
  @IsInt()
  id!: string;
}
