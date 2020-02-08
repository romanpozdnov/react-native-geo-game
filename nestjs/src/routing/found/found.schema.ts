import * as mongoose from "mongoose";

import { IFoundField } from "./found.types";

import { M_TYPE } from "@constants/field";

export const FoundSchema = new mongoose.Schema<IFoundField>({
  idUser: M_TYPE.ID,
  itemsIdList: M_TYPE.ID_ARRAY
});
