const URL = 'http://localhost:4000';

const DATABASE_ROOT_URL = {
  item: `${URL}/items`,
  user: `${URL}/users`,
};

export const DATABASE = {
  URL: DATABASE_ROOT_URL,
  DATABASE_REQUEST: {
    user_find_by_email: (email: string) =>
      `${DATABASE_ROOT_URL.user}?email=${email}`,
    user_with_id: (id: string) => `${DATABASE_ROOT_URL.user}?id=${id}`,
    item_by_user_id: (idUser: string) =>
      `${DATABASE_ROOT_URL.item}?idUser=${idUser}`,
  },
};
