import { apiBack_End } from "../api/api";
import { IToken } from "../interfaces/interfaces";
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
        const dataRequest = await apiBack_End.post('api/users/list/email',{
            email: email
        })
        console.log(dataRequest)
        return {data: request.data, status: request.status, outerData: dataRequest.data};
    } catch (error) {
        return null;
    }
}