import * as React from 'react';
import {useForm} from 'react-hook-form';

import { IUserField } from '@services/server/login.type';

import {LogInStyle} from './login.style';

interface ILogInProps{}

export const LogIn: React.FC<ILogInProps> = ({}) => {
  const {handleSubmit, errors, watch} = useForm<IUserField>();
  return(
    
  )
}