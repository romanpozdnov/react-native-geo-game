export enum URL {
  item = `http://localhost:4000/items`,
  user = `http://localhost:4000/users`,
  found = `http://localhost:4000/found`,
}
export const REQUEST = {
  found_by_email: (url: URL, email: string) => `${url}/email/${email}`,
  found_by_id: (url: URL, id: string) => `${url}/id/${id}`,
  found_by_user_id: (url: URL, idUser: string) => `${url}/idUser/${idUser}`,
  found_by_item_id: (url: URL, idItem: string) => `${url}/idItem/${idItem}`,
  user_found_item: `${URL.item}/ids`,
};

export const CONFIG = { headers: { 'Content-Type': 'application/json' } };
