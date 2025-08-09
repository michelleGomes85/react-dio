import { createContext, useState } from 'react';
import { IAuthContext, IAuthContextProviderProps } from './types';
import { IUser } from '../types/user';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
    children,
  }: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>);
};