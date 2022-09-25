import { IAuthProvider } from "../interfaces/Auth";
import { createContext, useContext } from "react";




export const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export const AuthProvider = ({children}: IAuthProvider) =>{
    return <AuthContext.Provider value={{}} >{children}</AuthContext.Provider>
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

