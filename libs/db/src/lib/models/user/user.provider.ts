import { DATABASE_CONNECTION_KEY, DB_KEYS } from "../../constants";
import { Connection } from "mongoose";
import { UserSchema } from "./user.model";

export const usersProvider = [
    {
        provide: DB_KEYS.USER,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [DATABASE_CONNECTION_KEY],
    }
]