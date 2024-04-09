'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import Router from 'next/router';
import { redirect } from "next/navigation";

interface AuthContextProps { 
    user: UserProps | null;
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

const AuthContext = createContext<AuthContextProps>({ user: null, logout: () => {} });

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        const verifyUser = async () => {
            console.log('verifyUser is played')
            const response = await fetch('/api/auth/status');
            const data = await response.json();

            if (data.isLoggedIn) {
                setUser(data.user);
            } else {
                Router.push('/');
            }
        }
        verifyUser();
    },[]);

    const logout = async () => { 
        const response = await fetch('/api/auth/logout', {method: 'POST'});
        console.log('logout response', response)
        
        if (response.ok) {
            console.log('logout success');
            setUser(null);
            redirect('/');
        } else {
            console.log('logout failed');
        }
    }

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
