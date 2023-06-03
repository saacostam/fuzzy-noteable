import { Document, Schema } from "mongoose";

export const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
});

export interface User extends Document{
    readonly username: string,
    readonly email: string,
    readonly password: string,
}