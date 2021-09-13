import { User } from "../../../../..";

export interface OutputGetUsers {
  data: User[];
  total: number;
  take: number;
  skip: number;
}
