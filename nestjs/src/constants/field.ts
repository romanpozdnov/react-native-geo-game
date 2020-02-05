import * as mongoose from "mongoose";

import { STRING, STRING_GENERATOR } from "./string";

const isValidEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const isValidPassword = (password: string): boolean =>
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(
    password
  );

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
    type: mongoose.Types.ObjectId,
    required: true,
    validate: {
      validator: (id: string) => isValidEmail(id),
      message: props => STRING_GENERATOR.email_error_text(props.value)
    }
  },

  EMAIL: {
    type: String,
    validate: {
      validator: (email: string) => isValidEmail(email),
      message: props => STRING_GENERATOR.email_error_text(props.value)
    },
    required: [true, STRING.email_required]
  },

  PASSWORD: {
    type: String,
    validate: {
      validator: (password: string) => mongoose.isValidObjectId(password),
      message: props => STRING_GENERATOR.id_error_text(props.value)
    },
    required: [true, STRING.id_required]
  }
};
