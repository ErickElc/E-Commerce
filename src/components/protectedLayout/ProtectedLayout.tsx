/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { apiBack_End } from "../../api/api";
import { getUserLocalStorage } from "../../auth/util";
import PaginaPadrao from "../PaginaPadrao";


export function ProtectedLayoutNoLogged({children} : {children: JSX.Element }) {
    const User = getUserLocalStorage();
    const navigate = useNavigate();
    const [response, setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        apiBack_End.post('auth/free',{
            token: User?.token,
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User, navigate])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 200){
            return children;
        }else{
            return <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>
        }  
    } 
    return VerifyLoggin(response);
}
export function ProtectedLayoutLogged({children} : {children: JSX.Element}){
    const User = getUserLocalStorage();
    const [response, setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        apiBack_End.post('auth/free',{
            token: User?.token,
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 200){
            
            return <PaginaPadrao><h1>Você não tem acesso</h1></PaginaPadrao>;
        }else{
            return children;
        }
    }
    return VerifyLoggin(response);
}
export function ProtectedLayoutAdmin({children}: {children:JSX.Element}){
    const User = getUserLocalStorage();
    const [response, setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        apiBack_End.post('auth/admin',{
            token: User?.token,
            email: User?.email
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 200){
            return children;
        }else{
            return <PaginaPadrao> <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existee</h1> </PaginaPadrao>;
        }
    }
    return VerifyLoggin(response);
}
export function ProtectedLayoutPrivatePageUser({children} : {children: JSX.Element}){
    const {id} = useParams();
    const User = getUserLocalStorage();
    const [response , setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        apiBack_End.post(`auth/private/free/${id}`,{
            token: User?.token,
            email: User?.email
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User,id])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 202){
            return children;
        }else{
            return <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>;
        }
    }
    return VerifyLoggin(response);

}