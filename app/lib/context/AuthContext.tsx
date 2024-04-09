'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import Router from 'next/router';

interface AuthContextProps { 
    user: UserProps | null;
    login: (userData: any) => void;
    logout: () => void;
}

interface UserProps {
    id: string;
    display_name: string;
    images: UserImagesProps[];
}

interface UserImagesProps {
    url: string;
    height: number;
    width: number;
}

const AuthContext = createContext<AuthContextProps>({ user: null, login: () => {}, logout: () => {} });

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        const verifyUser = async () => {
            const response = await fetch('/api/auth/status');
            const data = await response.json();
            console.log('date verify User', data)

            if (data.isLoggedIn) {
                setUser(data.user);
            } else {
                Router.push('/');
            }
        }
        verifyUser();
    },[]);

    const login = (userData: UserProps) => {
        setUser(userData);
    }

    const logout = async () => { 
        await fetch('/api/auth/logout', {method: 'POST'});
        setUser(null);
        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
