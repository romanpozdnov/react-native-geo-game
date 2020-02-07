export const STRINGS = {
  email_required: "Email is required field",
  password_required: "Password is required field",
  id_required: "Id is required field",
  ITEMS_ERROR: {
    find_all: "Not found items",
    find_by_id: "Not found item by this id",
    find_by_user_id: "Not found items by user id",
    create: "Not create item",
    remove: "Not remove item",
    update: "Not update item",
    find_found_user_items: "Not found user found items"
  },
  USERS_ERROR: {
    find_all: "Not found users",
    find_by_id: "Not found user by this id",
    find_by_email: "Not found users by this email",
    create: "Not create user",
    remove: "Not remove user",
    update: "Not update user"
  }
};

export const STRING_GENERATOR = {
  password_error_text: (not_valid_password: string) =>
    `${not_valid_password} is not valid password`,
  email_error_text: (not_valid_email: string) =>
    `${not_valid_email} is not valid email`,
  id_error_text: (not_valid_id: string) => `${not_valid_id} is not valid id`
};
