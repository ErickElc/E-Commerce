import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import { createContext, useContext, useState, useEffect } from "react";
import { IAuthProvider, IContext } from "../interfaces/Auth";
import { IToken} from "../interfaces/user";
import { apiBack_End } from "../api/api";




export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IToken | null>();
    const [data, setData] = useState<IToken| null>();

    useEffect(()=>{
        const User = getUserLocalStorage()
        if(User){
            setUser(User);
        }
    },[])

    useEffect(()=>{
        apiBack_End.post('api/users/list/email',{
            email: user?.email
        })
        .then(res => setData(res.data))
        .catch(err => {return null})
    },[user])

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
        const payload =  {token: Request?.data, email: email, name: data?.name, id: data?._id};
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

