import { apiBack_End } from "../api/api";
import { IToken } from "../interfaces/interfaces";
export const setUserLocalStorage = (user: IToken| null) =>{
    localStorage.setItem('u', JSON.stringify(user));
}
export const getUserLocalStorage = (): IToken | null => {
  const json = localStorage.getItem("u");
  if (!json) return null;
  const user = JSON.parse(json);
  return user ?? null;
};
export async function loginRequest(email: string, password: string){
    try {
        const request = await apiBack_End.post('api/users/login',{
            email: email,
            password: password
        })
        return {data: request.data.token, status: request.status, outerData: request.data};
    } catch (error) {
        return null;
    }
}

export async function  verifyToken(token: string){
    try {
        const request = await apiBack_End.get("auth/verify-token", {headers: {t: token}});
        return request.status === 200 ? true : false;
    } catch (error) {
        return false;
    } 
}

export async function verifyAdmin(token: string, userId: string) {
  try {
    const request = await apiBack_End.get(`auth/admin/${userId}`, {
      headers: { t: token },
    });
    return request.status === 200 ? true : false;
  } catch (error) {
    return false;
  }
}

export async function verifyUser(token: string, userId: string) {
  try {
    const request = await apiBack_End.get(`auth/on-access/${userId}`, {
      headers: { t: token },
    });
    return request.status === 200 ? true : false;
  } catch (error) {
    return false;
  }
}