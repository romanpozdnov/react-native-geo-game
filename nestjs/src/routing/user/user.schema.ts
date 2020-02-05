import * as mongoose from "mongoose";

import { M_TYPE } from "@constants/field";

export const UserSchema = new mongoose.Schema({
  email: M_TYPE.EMAIL,
  password: M_TYPE.PASSWORD
});
