import * as mongoose from "mongoose";

import { M_TYPE } from "@constants/field";

export const ItemSchema = new mongoose.Schema({
  idUser: M_TYPE.ID,
  name: M_TYPE.STRING,
  isFound: M_TYPE.BOOLEAN,
  coordinates: {
    latitude: M_TYPE.NUMBER,
    longitude: M_TYPE.NUMBER
  }
});
