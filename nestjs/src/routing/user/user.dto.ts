import { IUser } from "./user.types";

export class UserDTO implements Readonly<IUser> {
  readonly email: string;
  readonly password: string;
}
