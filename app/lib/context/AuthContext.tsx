'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    useEffect(() => {
        const verifyUser = async () => {
            const response = await fetch('/api/auth/status');
            const data = await response.json();

            if (data.isLoggedIn) {
                setUser(data.user);

            } else {
                router.push('/');
            }
        }
        verifyUser();
    },[]);

    const logout = async () => { 
        const response = await fetch('/api/auth/logout', {method: 'POST'});
        
        if (response.ok) {
            setUser(null);
            router.push('/');
        }
    }

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
