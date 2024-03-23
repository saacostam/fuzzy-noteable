import { BaseUser } from "@noteable/types";

export type RegisterUserDto = Omit<BaseUser, 'role'> & {
    password: string;
}
