export const STRING = {
  email_required: "Email is required field",
  password_required: "Password is required field",
  id_required: "Id is required field"
};

export const STRING_GENERATOR = {
  password_error_text: (not_valid_password: string) =>
    `${not_valid_password} is not valid password`,
  email_error_text: (not_valid_email: string) =>
    `${not_valid_email} is not valid email`,
  id_error_text: (not_valid_id: string) => `${not_valid_id} is not valid id`
};
