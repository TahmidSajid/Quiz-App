import React, { createContext, useState } from 'react'
import api from '../api/axios'
import { handleError, handleSuccess } from '../api/handler';

export const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);



    const register = async (formData) => { 
        try {
            let res = await api.post('/register',{
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            let data = handleSuccess(res,true);
            setUser(data.user_info);
            setToken(data.token);
            
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
            setUser(data.user);
            setToken(data.token);
            
        } catch (error) {
            handleError(error,true);
        }
        
    }

    return(
        <AuthContext.Provider value={{user,token,register,login}}>
            {children}
        </AuthContext.Provider>
    )
}