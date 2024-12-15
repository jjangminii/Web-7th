import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    isLogin: boolean;
    accessToken: string | null;
    login: (email: string, accessToken: string, refreshToken: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));

    const login = (email: string, accessToken: string, refreshToken: string) => {
        setIsLogin(true);
        setAccessToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('email', email);
    };

    const logout = () => {
        setIsLogin(false);
        setAccessToken(null);
        localStorage.removeItem('email');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };

    return (
        <AuthContext.Provider value={{ isLogin, accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
