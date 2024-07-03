import * as utils from "./util";
import { createContext, useContext, useState, useEffect } from "react";
import { IAuthProvider, IContext } from "../interfaces/interfaces";
import { IToken} from "../interfaces/interfaces";
import { useCarrinhoContext } from "../context/Carrinho/Carrinho";




export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const CarrinhoContext = useCarrinhoContext();
    const [user, setUser] = useState<IToken | null>();
    useEffect(()=>{
        const User = utils.getUserLocalStorage();
        if(User){
            setUser(User);
        }
    },[])
    
    function verifyLogin() : Promise<boolean>{
        return new Promise((resolve, reject) => {
            if(user !== null && user !== undefined){
                utils.verifyToken(user.token)
                    .then(res => resolve(res))
                    .catch(err => {
                        logout();
                        reject(err);
                    });
            } else {
                reject(false)
            }
        })
    }
    function verifyAdmin(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            if (user !== null && user !== undefined) {
              utils
                .verifyAdmin(user.token, user.id)
                .then((res) => resolve(res))
                .catch((err) => reject(err));
            } else {
              reject(false);
            }
        })
    }
    function verifyUser(): Promise<boolean> {
      return new Promise((resolve, reject) => {
        
        if (user !== null && user !== undefined){
            utils
                .verifyUser(user.token, user.id)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    logout();
                    reject(err);
                });
        } 
      });
    }
    async function authenticate(email: string, password: string){
        const Request = await utils.loginRequest(email, password);
        const payload = {token: Request?.data, email: email, name: Request?.outerData?.name, id: Request?.outerData?.id};
        utils.setUserLocalStorage(payload);
        setUser(payload);
        return Request?.status;
    }
    function logout(){
        setUser(null)
        utils.setUserLocalStorage(null)
        CarrinhoContext.Limpar_Carrinho()
    }

    return (
      <AuthContext.Provider
        value={{ ...user, authenticate, logout, verifyLogin, verifyAdmin, verifyUser}}
      >
        {[children]}
      </AuthContext.Provider>
    );
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

