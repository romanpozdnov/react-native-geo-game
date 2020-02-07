const SERVER_URL = 'http://localhost:4000';

const URL = {
  item: `${SERVER_URL}/items`,
  user: `${SERVER_URL}/users`,
};

export const DATABASE = {
  URL,
  DATABASE_REQUEST: {
    user_find_by_email: (email: string) => `${URL.user}/email/${email}`,
    user_with_id: (id: string) => `${URL.user}/id/${id}`,
    item_by_user_id: (idUser: string) => `${URL.item}/idUser/${idUser}`,
  },
};

export const CONFIG = { headers: { 'Content-Type': 'application/json' } };
