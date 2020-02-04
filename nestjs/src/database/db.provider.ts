import * as mongoose from "mongoose";
const PASSWORD: string = "DamnationCH";
const USERNAME: string = "SweDraw";
const DATABASE: string = "code";

export const CONNECT_URL: string = `mongodb+srv://${USERNAME}:${PASSWORD}@code-eh2jr.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

export const DB_PROVIDER = "DbConnectionToken";

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(CONNECT_URL);
    }
  }
];
