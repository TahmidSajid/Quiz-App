import React, { createContext, useState } from 'react'
import api from '../api/axios'
import { handleError, handleSuccess } from '../api/handler';

export const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);



    const register = async (formData) => { 
        try {
            let res = await api.post('/register',{
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation,
            });
            let data = handleSuccess(res,true);
            setAuth(data.token, data.user_info);
            return true;
            
        } catch (error) {
            handleError(error,true);
        }
        
    }

    
    const login = async (formData) => { 
        try {
            let res = await api.post('/login',{
                email: formData.email,
                password: formData.password,
            });
            let data = handleSuccess(res,true);
            setAuth(data.token, data.user);
            return true;
            
        } catch (error) {
            handleError(error,true);
        }
        
    }

    const logout = async (formData) => { 
        try {
            let res = await api.post('/logout');
            let data = handleSuccess(res,true);
            deleteAuth();
        } catch (error) {
            handleError(error,true);
        }
        
    }

    const setAuth = (token,user)=>{
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
    }

    const deleteAuth = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken('');
        setUser('');
    }

    return(
        <AuthContext.Provider value={{user,token,register,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}