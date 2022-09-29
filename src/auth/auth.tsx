import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import { createContext, useContext, useState, useEffect } from "react";
import { IAuthProvider, IContext } from "../interfaces/interfaces";
import { IToken} from "../interfaces/interfaces";
import { apiBack_End } from "../api/api";




export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IToken | null>();
    useEffect(()=>{
        const User = getUserLocalStorage();
        if(User){
            setUser(User);
        }
    },[])
    const VerifyLoggin = async () => {
        try {
            await apiBack_End.post('auth/free',{
                token: user?.token,
                email: user?.email
            });
            return true
            
        } catch (error) {
            return false
        }
    }
    async function authenticate(email: string, password: string){
        const Request = await loginRequest(email, password);
        const payload = {token: Request?.data, email: email, name: Request?.outerData?.name, id: Request?.outerData?._id};
        setUserLocalStorage(payload);
        setUser(payload);
        return Request?.status;
    }
    function logout(){
        setUser(null)
        setUserLocalStorage(null)
    }
    return <AuthContext.Provider value={{...user, authenticate, logout, VerifyLoggin}} >{[children]}</AuthContext.Provider>
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

