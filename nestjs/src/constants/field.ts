import * as mongoose from "mongoose";

import { STRINGS, STRING_GENERATOR } from "./string";

const isValidEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const isValidPassword = (password: string): boolean =>
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(
    password
  );

const ID_TYPE = mongoose.Types.ObjectId;

export const M_TYPE = {
  STRING: {
    type: String,
    required: true
  },

  NUMBER: {
    type: Number,
    required: true
  },

  BOOLEAN: {
    type: Boolean,
    required: true
  },

  ID: {
    type: ID_TYPE,
    required: true,
    validate: {
      validator: (id: string) => mongoose.isValidObjectId(id),
      message: props => STRING_GENERATOR.email_error_text(props.value)
    }
  },

  EMAIL: {
    type: String,
    validate: {
      validator: (email: string) => isValidEmail(email),
      message: props => STRING_GENERATOR.email_error_text(props.value)
    },
    required: [true, STRINGS.email_required]
  },

  PASSWORD: {
    type: String,
    validate: {
      validator: (password: string) => isValidPassword(password),
      message: props => STRING_GENERATOR.id_error_text(props.value)
    },
    required: [true, STRINGS.id_required]
  },

  ID_ARRAY: {
    type: [ID_TYPE],
    required: [true, STRINGS.id_required]
  }
};
