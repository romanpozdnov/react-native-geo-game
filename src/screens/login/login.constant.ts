import { IUserField } from '@services/server/userData.type';
export const FIELD_NAME: Record<keyof IUserField, string> = {
  email: 'Email',
  password: 'Password',
};
