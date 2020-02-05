import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ILogInState {}

const initialState: ILogInState = {};

export const useLogIn = <T>() => {
  const formMethod = useForm<T>();
  const [state, setState] = useState<ILogInState>(initialState);

  const onSubmit = () => {};

  return { formMethod };
};
