import * as mongoose from "mongoose";

export const M_TYPE = {};

export const STRING = {
  type: String
  //required: true
};

export const NUMBER = {
  type: Number
  //required: true
};

export const BOOLEAN = {
  type: Boolean
  //required: true
};

export const ID = mongoose.Types.ObjectId;
