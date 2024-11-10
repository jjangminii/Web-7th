import  { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);

    const login = (email, accessToken,refreshToken) => {
        setIsLogin(true);
        setAccessToken(accessToken);
        localStorage.setItem('accessToken', accessToken); 
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('email',email);
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};