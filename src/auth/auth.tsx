import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import { createContext, useContext, useState, useEffect } from "react";
import { IAuthProvider, IContext } from "../interfaces/Auth";
import { IToken} from "../interfaces/user";
import { apiBack_End } from "../api/api";




export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IToken | null>();
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
            return console.log('não autorizado');
        }
    }
    async function authenticate(email: string, password: string){
        const Request = await loginRequest(email, password);
        console.log(Request?.outerData)
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

