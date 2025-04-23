import React, { createContext, useContext, useState, useEffect } from 'react';

// Context structure definition

interface AuthContextType {
    isLoggedIn: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

// Context creation
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Supplier component
export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children}) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const isLoggedIn = !!token;

    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.AuthProvider value={{ isLoggedIn, token, login, logout}}>
            {children}
        </AuthContext.AuthProvider>
    );
};

//Hook to use the context in an easy way
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};