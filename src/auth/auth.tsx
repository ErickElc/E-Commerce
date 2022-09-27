import { createContext, useContext, useState, useEffect } from "react";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import { IAuthProvider, IContext } from "../interfaces/Auth";
import { useNavigate } from "react-router-dom";
import { IToken } from "../interfaces/user";
import { apiBack_End } from "../api/api";




export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IToken | null>();
    const navigate = useNavigate();

    useEffect(()=>{
        const User = getUserLocalStorage()
        if(User){
            setUser(User);
        }
    },[])
    const VerifyLoggin = async () => {
        try {
            await apiBack_End.post('admin/free',{
                token: user?.token
            });
            return console.log('autorizado');
            
        } catch (error) {
            navigate('/login');
        }
    }

    async function authenticate(email: string, password: string){
        try {
            const Request = await loginRequest(email, password);
            const payload =  {token: Request?.data.token, email: email}
            setUserLocalStorage(payload)
            setUser(payload);
            return Request?.status
        } catch (error) {
            setUser(null);
            setUserLocalStorage(null);
        }

    }
    function logout(){
        setUser(null)
        setUserLocalStorage(null)
    }
    return <AuthContext.Provider value={{...user,  authenticate, logout, VerifyLoggin}} >{[children]}</AuthContext.Provider>
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

