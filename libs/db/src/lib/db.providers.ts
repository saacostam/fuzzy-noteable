import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION_KEY } from './constants';

const DB_URI = process.env['DB_URI'];
if (!DB_URI) throw new mongoose.MongooseError('No DB_URI was found!')

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION_KEY,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(DB_URI),
  },
];