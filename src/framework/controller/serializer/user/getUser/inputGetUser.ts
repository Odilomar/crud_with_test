import { IsInt, IsNotEmpty } from "class-validator";

export class InputGetUser {
  @IsNotEmpty()
  @IsInt()
  id!: string;
}
