import React from "react";
import { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser;
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

