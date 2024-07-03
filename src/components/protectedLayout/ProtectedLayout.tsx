/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PaginaPadrao from "../PaginaPadrao";
import { useAuthContext } from "../../auth/auth";


export function ProtectedLayoutNoLogged({children} : {children: JSX.Element }) {
    const userAuthContext = useAuthContext();
    const [response, setResponse] = useState<Boolean>(false);
    useEffect(() => {
      userAuthContext
        .verifyLogin()
        .then((res) => {
          setResponse(res);
        })
        .catch((err) => {
          setResponse(err);
        });
    }, []);

    return !response ? (
      <h1 className="font-bold text-2xl mt-10">
        ERROR: 404 Essa página não existe
      </h1>
    ) : (
      children
    );
}
export function ProtectedLayoutLogged({children} : {children: JSX.Element}){
    const userAuthContext = useAuthContext();
    const [response, setResponse] = useState<Boolean>(false);
    useEffect(()=>{
      console.log('carregou')
        userAuthContext.verifyLogin()
        .then(res => { 
          console.log(res)
                setResponse(!res)
            }).catch(err => {
              console.log(err)
                setResponse(!err);
            });
    },[response, userAuthContext])
            
    return (!response) ?  (<PaginaPadrao><h1>Você não tem acesso</h1></PaginaPadrao>) : children;
}
export function ProtectedLayoutAdmin({children}: {children:JSX.Element}){
    const userAuthContext = useAuthContext();
    const [response, setResponse] = useState<Boolean>(false);
    useEffect(() => {
      userAuthContext
        .verifyAdmin()
        .then((res) => {
          setResponse(res);
        })
        .catch((err) => {
          setResponse(err);
        });
    }, []);

    return !response ? (
      <PaginaPadrao> <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existee</h1> </PaginaPadrao>
    ) : (
      children
    );
}     
export function ProtectedLayoutPrivatePageUser({children} : {children: JSX.Element}){
    const userAuthContext = useAuthContext();
    const [response, setResponse] = useState<Boolean>(false);
    useEffect(() => {
      userAuthContext
        .verifyUser()
        .then((res) => {
          setResponse(res);
        })
        .catch((err) => {
          setResponse(err);
        });
        
    }, [response]);
    return !response ? (
      
        <h1 className="font-bold text-2xl mt-10">
          ERROR: 404 Essa página não existee
        </h1>
    ) : (
      children
    );

}