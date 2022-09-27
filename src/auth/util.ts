import { apiBack_End } from "../api/api";
import {  IToken } from "../interfaces/user";
export const setUserLocalStorage = (user: IToken| null) =>{
    localStorage.setItem('u', JSON.stringify(user));
}
export const getUserLocalStorage = () => {
    const json = localStorage.getItem('u')
    if(!json) return null;
    const user = JSON.parse(json);
    return user ?? null;
}
export async function loginRequest(email: string, password: string){
    try {
        const request = await apiBack_End.post('api/users/login',{
            email: email,
            password: password
        })
        console.log(request)
        return {data: request.data, status: request.status};
    } catch (error) {
        return null;
    }
}