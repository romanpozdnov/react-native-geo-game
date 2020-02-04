import * as mongoose from "mongoose";

import { STRING, BOOLEAN, NUMBER, ID } from "../../constants/field";

export const ItemSchema = new mongoose.Schema({
  idUser: ID,
  name: STRING,
  isFound: BOOLEAN,
  coordinates: {
    latitude: NUMBER,
    longitude: NUMBER
  }
});
